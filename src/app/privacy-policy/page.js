import React from 'react';

export const metadata = {
  title: 'Privacy Policy | WebNex',
  description: 'Learn how WebNex collects, uses, and protects your data.',
};

export default function PrivacyPolicy() {
  return (
    <main style={{ paddingTop: '140px', paddingBottom: '100px', minHeight: '100vh', background: '#f8fafc' }}>
      <div className="container-custom" style={{ maxWidth: 860 }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: '#0F172A', marginBottom: 16, fontFamily: 'Poppins, sans-serif' }}>
          Privacy <span style={{ color: '#6C63FF' }}>Policy</span>
        </h1>
        <p style={{ color: '#64748b', fontSize: 16, marginBottom: 48, fontWeight: 500 }}>
          Effective Date: January 1, 2025
        </p>
        
        <div style={{ background: 'white', padding: 'clamp(30px, 5vw, 50px)', borderRadius: 24, boxShadow: '0 20px 40px rgba(0,0,0,0.03)', color: '#334155', lineHeight: 1.8, fontSize: 16 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginTop: 0, marginBottom: 16, fontFamily: 'Poppins, sans-serif' }}>1. Introduction</h2>
          <p style={{ marginBottom: 32 }}>At WebNex, your privacy is our priority. This Privacy Policy outlines how we collect, use, process, and protect your personal information when you use our website, services, and AI solutions.</p>
          
          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginTop: 0, marginBottom: 16, fontFamily: 'Poppins, sans-serif' }}>2. Information We Collect</h2>
          <p style={{ marginBottom: 12 }}>We collect information you provide directly to us when you request a consultation, sign up for our newsletter, or contact our support team. This includes:</p>
          <ul style={{ marginBottom: 32, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}><strong>Personal Details:</strong> Name, email address, phone number, and company name.</li>
            <li style={{ marginBottom: 8 }}><strong>Project Data:</strong> Information regarding your project requirements, budgets, and business goals.</li>
            <li style={{ marginBottom: 8 }}><strong>Automated Data:</strong> IP addresses, browser types, and usage metrics collected via cookies to improve user experience.</li>
          </ul>

          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginTop: 0, marginBottom: 16, fontFamily: 'Poppins, sans-serif' }}>3. How We Use Your Information</h2>
          <p style={{ marginBottom: 12 }}>We use the collected information for the following purposes:</p>
          <ul style={{ marginBottom: 32, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>To provide, operate, and maintain our services.</li>
            <li style={{ marginBottom: 8 }}>To improve, personalize, and expand our digital products.</li>
            <li style={{ marginBottom: 8 }}>To understand and analyze how you use our website.</li>
            <li style={{ marginBottom: 8 }}>To communicate with you, either directly or through one of our partners, including for customer service.</li>
            <li style={{ marginBottom: 8 }}>To send you emails regarding project updates and invoicing.</li>
          </ul>

          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginTop: 0, marginBottom: 16, fontFamily: 'Poppins, sans-serif' }}>4. Data Security</h2>
          <p style={{ marginBottom: 32 }}>We use enterprise-grade security measures to preserve the integrity and security of your personal information. However, no data transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>

          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginTop: 0, marginBottom: 16, fontFamily: 'Poppins, sans-serif' }}>5. Contact Us</h2>
          <p style={{ marginBottom: 0 }}>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <strong style={{ color: '#6C63FF' }}>privacy@webnex.in</strong>.</p>
        </div>
      </div>
    </main>
  );
}
