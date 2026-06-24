import { useState, useEffect } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { Mail, Lock, ArrowLeft, User, Loader2, CheckCircle } from "lucide-react";
import { logIn, signUp, requestPasswordReset, logInWithGoogle } from "@/api/auth";
import { useAuth } from "@/lib/auth-context";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — ExamGlow" }] }),
  component: Login,
});

function Login() {
  const [mode, setMode] = useState<"login" | "signup" | "forgot" | "reset">("login");
  const [step, setStep] = useState<"email" | "password">("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetToken, setResetToken] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const navigate = useNavigate();
  const { refresh } = useAuth();

  useEffect(() => {
    const handleMessage = async (event: MessageEvent) => {
      if (event.data?.type === "GOOGLE_AUTH_SUCCESS") {
        const { email: authEmail, name: authName } = event.data;
        setLoading(true);
        setError("");
        try {
          const mockToken = `mock_${authEmail}:${authName}`;
          const result = await logInWithGoogle(mockToken);
          await refresh();
          if (result.needsOnboarding) {
            navigate({ to: "/onboarding" as any });
          } else {
            navigate({ to: "/home" as any });
          }
        } catch (e: any) {
          setError(e.message ?? "Google authentication failed.");
        } finally {
          setLoading(false);
        }
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [navigate, refresh]);

  const handleGoogleSignIn = () => {
    setError("");
    const width = 480;
    const height = 580;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    
    const popup = window.open(
      "/google-signin-mock",
      "GoogleSignIn",
      `width=${width},height=${height},left=${left},top=${top},status=no,resizable=no`
    );
    
    if (!popup) {
      setError("Pop-up blocker active. Please allow pop-ups for this site.");
      return;
    }
  };

  const handleEmailContinue = () => {
    if (email) setStep("password");
  };

  const handleSignIn = async () => {
    setError("");
    setLoading(true);
    try {
      const result = await logIn(email, password);
      await refresh();
      if (result.needsOnboarding) {
        navigate({ to: "/onboarding" as any });
      } else {
        navigate({ to: "/home" as any });
      }
    } catch (e: any) {
      setError(e.message ?? "Sign in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async () => {
    setError("");
    setLoading(true);
    try {
      await signUp(email, password, name || email.split("@")[0]);
      await refresh();
      navigate({ to: "/onboarding" as any });
    } catch (e: any) {
      setError(e.message ?? "Sign up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    setError("");
    setLoading(true);
    try {
      await requestPasswordReset(email);
      setResetEmailSent(true);
    } catch (e: any) {
      setError(e.message ?? "Failed to send reset email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    setError("");
    setLoading(true);
    try {
      // Password reset handled server-side — stub for now
      setResetSuccess(true);
      setTimeout(() => {
        setMode("login");
        setStep("email");
        setResetToken("");
        setResetSuccess(false);
      }, 2000);
    } catch (e: any) {
      setError(e.message ?? "Failed to reset password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div
        className="relative hidden md:flex flex-col p-12 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          <Logo />
        </div>
        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <span className="inline-block text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white font-semibold w-fit">
            New: IGCSE 2024 Revision Packs
          </span>
          <h1 className="font-display text-5xl mt-6 leading-[1.05] text-white">
            Every petal of
            <br />
            knowledge
            <br />
            brings you closer
            <br />
            to <span className="accent-italic text-primary">your bloom</span>.
          </h1>
          <p className="text-white/80 mt-6 max-w-md">
            Join 10,000+ students worldwide who are mastering their exams with ExamGlow's calm and
            structured approach.
          </p>
          <div className="flex items-center gap-3 mt-8">
            <div className="flex -space-x-2">
              {[10, 11, 12].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/40?img=${i}`}
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt=""
                />
              ))}
            </div>
            <span className="text-sm text-white/80">Trusted by top students and educators</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-pink-soft/30">
        <Link to="/" className="text-sm text-foreground/60 flex items-center gap-1 self-start p-6">
          <ArrowLeft className="w-3 h-3" /> Back
        </Link>

        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-sm">
            <h2 className="font-display text-3xl">
              {mode === "login" ? "Welcome Back!" : mode === "signup" ? "Create Account" : mode === "forgot" ? "Reset Password" : "New Password"}
            </h2>
            <p className="text-foreground/70 text-sm mt-1">
              {mode === "login"
                ? "Continue your journey to academic excellence."
                : mode === "signup"
                ? "Start your IGCSE revision journey today."
                : mode === "forgot"
                ? "Enter your email to receive a reset link."
                : "Create a new secure password."}
            </p>

            {error && (
              <div className="mt-4 px-4 py-3 rounded-xl bg-destructive/10 text-destructive text-sm">
                {error}
              </div>
            )}

            {resetEmailSent && mode === "forgot" && (
              <div className="mt-4 px-4 py-3 rounded-xl bg-green-50 text-green-700 text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                If that email exists, a reset link has been sent. Check your inbox.
              </div>
            )}

            {/* Mode toggle */}
            {mode !== "forgot" && mode !== "reset" && (
              <div className="mt-6 flex gap-2 bg-muted/50 rounded-xl p-1">
                <button
                  onClick={() => { setMode("login"); setStep("email"); setError(""); }}
                  className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${mode === "login" ? "bg-white shadow text-foreground" : "text-foreground/50"}`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setMode("signup"); setStep("email"); setError(""); }}
                  className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${mode === "signup" ? "bg-white shadow text-foreground" : "text-foreground/50"}`}
                >
                  Sign Up
                </button>
              </div>
            )}

            <div className="flex items-center gap-3 my-5">
              <hr className="flex-1" />
              <span className="text-[10px] tracking-widest text-foreground/60">
                {step === "email" ? "ENTER YOUR EMAIL" : "ENTER YOUR PASSWORD"}
              </span>
              <hr className="flex-1" />
            </div>


            {resetSuccess && (
              <div className="mb-4 px-4 py-3 rounded-xl bg-green-50 text-green-700 text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Password reset successful! Redirecting to login...
              </div>
            )}

            {step === "email" ? (
              <>
                <label className="text-sm font-semibold">Email Address</label>
                <div className="relative mt-1">
                  <Mail className="w-4 h-4 absolute left-3 top-3 text-foreground/40" />
                  <input
                    type="email"
                    placeholder="name@examglow.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleEmailContinue()}
                    className="w-full border border-border rounded-xl pl-9 pr-3 py-2.5 text-sm"
                  />
                </div>
                <button
                  onClick={mode === "forgot" ? handleForgotPassword : handleEmailContinue}
                  disabled={!email}
                  className="mt-5 w-full py-3 rounded-full bg-primary text-primary-foreground font-semibold disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                  {mode === "forgot" ? "Send Reset Link" : "Continue"}
                </button>

                {mode !== "forgot" && (
                  <>
                    <div className="flex items-center gap-3 my-5">
                      <hr className="flex-1 border-border" />
                      <span className="text-[10px] tracking-widest text-foreground/45 uppercase font-medium">Or continue with</span>
                      <hr className="flex-1 border-border" />
                    </div>

                    <button
                      type="button"
                      onClick={handleGoogleSignIn}
                      className="w-full py-3 px-4 rounded-full border border-border bg-white text-foreground hover:bg-muted/10 font-semibold text-sm transition-all flex items-center justify-center gap-2.5 shadow-sm active:scale-98 cursor-pointer"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                      {mode === "signup" ? "Sign up with Google" : "Sign in with Google"}
                    </button>
                  </>
                )}
              </>
            ) : (
              <>
                {mode !== "reset" && (
                  <button
                    onClick={() => { setStep("email"); setMode("login"); setError(""); }}
                    className="text-sm text-foreground/60 flex items-center gap-1 mb-4"
                  >
                    <ArrowLeft className="w-3 h-3" /> {email}
                  </button>
                )}
                <div className="flex justify-between text-sm font-semibold">
                  <label>{mode === "reset" ? "New Password" : "Password"}</label>
                  {mode === "login" && (
                    <button onClick={() => { setMode("forgot"); setStep("email"); setError(""); }} className="text-primary">Forgot password?</button>
                  )}
                </div>
                <div className="relative mt-1">
                  <Lock className="w-4 h-4 absolute left-3 top-3 text-foreground/40" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && (
                        mode === "login" ? handleSignIn() : 
                        mode === "signup" ? handleSignUp() : 
                        handleResetPassword()
                      )
                    }
                    className="w-full border border-border rounded-xl pl-9 pr-3 py-2.5 text-sm"
                  />
                </div>
                {(mode === "signup" || mode === "reset") && (
                  <p className="text-xs text-foreground/50 mt-1">Minimum 8 characters with uppercase, lowercase, and number</p>
                )}
                <button
                  onClick={mode === "login" ? handleSignIn : mode === "signup" ? handleSignUp : handleResetPassword}
                  disabled={!password || loading}
                  className="mt-5 w-full py-3 rounded-full bg-primary text-primary-foreground font-semibold disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                  {mode === "login" ? "Sign In" : mode === "signup" ? "Create Account" : "Reset Password"}
                </button>
                {mode === "reset" && (
                  <button
                    onClick={() => { setMode("login"); setStep("email"); setError(""); setResetToken(""); }}
                    className="mt-3 w-full py-3 rounded-full border border-border text-foreground font-semibold"
                  >
                    Back to Login
                  </button>
                )}
              </>
            )}
          </div>
        </div>

        <p className="text-xs text-foreground/50 self-end p-6">
          ✿ Design with love by ExamGlow Team
        </p>
      </div>
    </div>
  );
}
