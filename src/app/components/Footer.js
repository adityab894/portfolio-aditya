export default function Footer() {
  return (
    <footer className="footer mt-20">
      <div className="max-w-[1184px] mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2 mb-4">
            {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.2501 23.25L13.7501 9.75L3.00006 14.25L10.2501 23.25Z" stroke="#00FFB2" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M13.75 0.75L10.25 14.25L21 9.75L13.75 0.75Z" stroke="#00FFB2" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
            <span className="body-medium text-primary">Innovator</span> */}
          </div>
          <p className="body-small text-secondary">
            Made with <span className="text-brand">♥</span> by Aditya
          </p>
          <p className="body-small text-secondary mt-2">
            © 2025 Aditya Bisht. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
