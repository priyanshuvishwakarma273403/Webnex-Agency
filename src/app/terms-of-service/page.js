import React from 'react';

export const metadata = {
  title: 'Terms of Service | WebNex',
  description: 'Read the terms and conditions for using WebNex services.',
};

export default function TermsOfService() {
  return (
    <main style={{ paddingTop: '140px', paddingBottom: '100px', minHeight: '100vh', background: '#f8fafc' }}>
      <div className="container-custom" style={{ maxWidth: 860 }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: '#0F172A', marginBottom: 16, fontFamily: 'Poppins, sans-serif' }}>
          Terms of <span style={{ color: '#00C2FF' }}>Service</span>
        </h1>
        <p style={{ color: '#64748b', fontSize: 16, marginBottom: 48, fontWeight: 500 }}>
          Last Updated: January 1, 2025
        </p>
        
        <div style={{ background: 'white', padding: 'clamp(30px, 5vw, 50px)', borderRadius: 24, boxShadow: '0 20px 40px rgba(0,0,0,0.03)', color: '#334155', lineHeight: 1.8, fontSize: 16 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginTop: 0, marginBottom: 16, fontFamily: 'Poppins, sans-serif' }}>1. Agreement to Terms</h2>
          <p style={{ marginBottom: 32 }}>By accessing our website and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you disagree with any of these terms, you are prohibited from using our services.</p>
          
          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginTop: 0, marginBottom: 16, fontFamily: 'Poppins, sans-serif' }}>2. Use License</h2>
          <p style={{ marginBottom: 12 }}>Permission is granted to temporarily download one copy of the materials on WebNex's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul style={{ marginBottom: 32, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>Modify or copy the materials;</li>
            <li style={{ marginBottom: 8 }}>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li style={{ marginBottom: 8 }}>Attempt to decompile or reverse engineer any software contained on WebNex's website;</li>
            <li style={{ marginBottom: 8 }}>Transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>

          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginTop: 0, marginBottom: 16, fontFamily: 'Poppins, sans-serif' }}>3. Service Delivery & Payments</h2>
          <p style={{ marginBottom: 32 }}>All projects require an upfront deposit before commencement. We adhere to strict milestones. Delays caused by the client in providing necessary assets may result in adjusted timelines. Final deliverables are handed over only upon receipt of full payment.</p>

          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginTop: 0, marginBottom: 16, fontFamily: 'Poppins, sans-serif' }}>4. Limitations</h2>
          <p style={{ marginBottom: 32 }}>In no event shall WebNex or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on WebNex's website.</p>

          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginTop: 0, marginBottom: 16, fontFamily: 'Poppins, sans-serif' }}>5. Revisions and Errata</h2>
          <p style={{ marginBottom: 0 }}>The materials appearing on WebNex's website could include technical, typographical, or photographic errors. WebNex does not warrant that any of the materials on its website are accurate, complete, or current. WebNex may make changes to the materials contained on its website at any time without notice.</p>
        </div>
      </div>
    </main>
  );
}
