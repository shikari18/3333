import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/google-signin-mock")({
  head: () => ({ meta: [{ title: "Sign in - Google Accounts" }] }),
  component: GoogleSignInMock,
});

function GoogleSignInMock() {
  const [step, setStep] = useState<"selector" | "custom">("selector");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const selectAccount = (accountEmail: string, accountName: string) => {
    if (window.opener) {
      window.opener.postMessage(
        {
          type: "GOOGLE_AUTH_SUCCESS",
          email: accountEmail,
          name: accountName,
        },
        "*"
      );
    }
    window.close();
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      selectAccount(email, name);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center font-sans text-slate-800 antialiased p-4">
      <div className="w-full max-w-[450px] border border-slate-200 rounded-lg p-10 flex flex-col items-center">
        {/* Google Logo SVG */}
        <div className="mb-4">
          <svg className="w-10 h-10" viewBox="0 0 24 24">
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
        </div>

        {step === "selector" ? (
          <>
            <h1 className="text-2xl font-normal text-slate-900 mb-1">Choose an account</h1>
            <p className="text-slate-600 text-sm mb-6">to continue to <span className="font-semibold text-slate-900">ExamGlow</span></p>

            <div className="w-full space-y-3 mb-6">
              <button
                onClick={() => selectAccount("jerry.courage@gmail.com", "Jerry Courage")}
                className="w-full flex items-center p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-left group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-medium mr-3 group-hover:bg-blue-100 transition-colors">
                  J
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-slate-950 font-sans">Jerry Courage</div>
                  <div className="text-xs text-slate-500 font-sans">jerry.courage@gmail.com</div>
                </div>
              </button>

              <button
                onClick={() => selectAccount("student.revision@gmail.com", "Student Revision")}
                className="w-full flex items-center p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-left group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-medium mr-3 group-hover:bg-blue-100 transition-colors">
                  S
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-slate-950 font-sans">Student Revision</div>
                  <div className="text-xs text-slate-500 font-sans">student.revision@gmail.com</div>
                </div>
              </button>
            </div>

            <button
              onClick={() => setStep("custom")}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors cursor-pointer"
            >
              Use another account
            </button>
          </>
        ) : (
          <form onSubmit={handleCustomSubmit} className="w-full flex flex-col">
            <h1 className="text-2xl font-normal text-slate-900 mb-1">Sign in</h1>
            <p className="text-slate-600 text-sm mb-6">with your Google Account</p>

            <div className="mb-4 text-left">
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@gmail.com"
                className="w-full px-3 py-2 border border-slate-300 rounded focus:border-blue-500 focus:outline-none text-slate-900 text-sm"
              />
            </div>

            <div className="mb-6 text-left">
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-3 py-2 border border-slate-300 rounded focus:border-blue-500 focus:outline-none text-slate-900 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 active:bg-blue-800 transition-colors text-sm cursor-pointer"
            >
              Sign In
            </button>

            <button
              type="button"
              onClick={() => setStep("selector")}
              className="text-slate-500 hover:text-slate-700 text-sm font-medium mt-4 transition-colors cursor-pointer"
            >
              Back to accounts
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
