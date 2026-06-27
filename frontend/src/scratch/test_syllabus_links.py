import requests, re

h = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

codes = ['0580', '0610', '0625', '0452']
slugs = {
    '0580': 'mathematics',
    '0610': 'biology',
    '0625': 'physics',
    '0452': 'accounting'
}

for code in codes:
    slug = slugs[code]
    # We test both the past-papers page and the main subject page
    for suffix in ['', 'past-papers/']:
        url = f'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-{slug}-{code}/{suffix}'
        try:
            r = requests.get(url, headers=h, timeout=10)
            if r.status_code == 200:
                pdfs = re.findall(r'href="([^"]*\.pdf)"', r.text, re.IGNORECASE)
                syllabus_pdfs = [p for p in pdfs if 'syllabus' in p.lower()]
                if syllabus_pdfs:
                    print(f"URL: {url} -> Found {len(syllabus_pdfs)} syllabus PDFs:")
                    for sp in syllabus_pdfs[:5]:
                        full = sp if sp.startswith('http') else 'https://www.cambridgeinternational.org' + sp
                        print("  -", full)
                    break
        except Exception as e:
            print(f"Error for {url}: {e}")
