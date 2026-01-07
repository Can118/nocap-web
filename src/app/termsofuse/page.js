export const metadata = {
  title: 'Terms of Use - NoCap',
  description: 'Terms of Use for NoCap anonymous messaging app',
}

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-gray-50 py-8 px-4 sm:px-6 lg:px-8" style={{ scrollBehavior: 'smooth' }}>
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="bg-black text-white rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#FCF300] rounded-xl flex items-center justify-center">
              <span className="text-2xl font-black text-black">NC</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black">NoCap</h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#FCF300]">Terms of Use</h2>
          <p className="text-gray-300 text-sm">Last Updated: January 6, 2026</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Table of Contents - Sticky Sidebar */}
        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-8 bg-white rounded-2xl shadow-xl p-6 border-2 border-[#FCF300]">
            <h3 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-[#FCF300]">📋</span>
              Contents
            </h3>
            <nav className="space-y-2">
              <a href="#acceptance" className="block text-sm text-gray-700 hover:text-[#FCF300] hover:translate-x-1 transition-all duration-200 font-medium">1. Acceptance</a>
              <a href="#eligibility" className="block text-sm text-gray-700 hover:text-[#FCF300] hover:translate-x-1 transition-all duration-200 font-medium">2. Eligibility</a>
              <a href="#account" className="block text-sm text-gray-700 hover:text-[#FCF300] hover:translate-x-1 transition-all duration-200 font-medium">3. Account</a>
              <a href="#service" className="block text-sm text-gray-700 hover:text-[#FCF300] hover:translate-x-1 transition-all duration-200 font-medium">4. Service</a>
              <a href="#conduct" className="block text-sm text-gray-700 hover:text-[#FCF300] hover:translate-x-1 transition-all duration-200 font-medium">5. User Conduct</a>
              <a href="#liability" className="block text-sm text-gray-700 hover:text-[#FCF300] hover:translate-x-1 transition-all duration-200 font-medium">13. Liability</a>
              <a href="#contact" className="block text-sm text-gray-700 hover:text-[#FCF300] hover:translate-x-1 transition-all duration-200 font-medium">21. Contact</a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none [&_h2]:text-[#191919] [&_h2]:font-extrabold [&_h2]:mt-10 [&_h2]:mb-5 [&_h2]:pb-2 [&_h2]:border-b-4 [&_h2]:border-[#FCF300] [&_h3]:text-[#191919] [&_h3]:font-bold [&_h3]:mt-6 [&_a]:text-[#FCF300] [&_a]:no-underline [&_a]:font-semibold [&_a]:transition-all hover:[&_a]:text-[#191919] hover:[&_a]:underline">

          <div className="bg-gradient-to-r from-[#FCF300] to-yellow-200 rounded-xl p-6 mb-8 border-2 border-black shadow-lg">
            <p className="text-sm text-black font-bold leading-relaxed">
              ⚠️ IMPORTANT: PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING NOCAP. BY ACCESSING OR USING THE SERVICE, YOU AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE THE SERVICE.
            </p>
          </div>

          <section id="acceptance" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              These Terms of Use ("Terms") constitute a legally binding agreement between you ("you," "your," or "User") and NoCap ("we," "us," or "our") governing your access to and use of the NoCap mobile application, website (nocap.bio), and all associated services (collectively, the "Service").
            </p>
            <p className="text-gray-700 mb-4">
              By creating an account, accessing, or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy, which is incorporated by reference.
            </p>
            <p className="text-gray-700 font-semibold">
              IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT ACCESS OR USE THE SERVICE.
            </p>
          </section>

          <section id="eligibility" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility and Age Restrictions</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Minimum Age Requirement</h3>
            <p className="text-gray-700 mb-4">
              NoCap is intended ONLY for individuals who are <strong>18 years of age or older</strong>.
            </p>
            <p className="text-gray-700 mb-4">By using the Service, you represent and warrant that:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>You are at least 18 years old</li>
              <li>You have the legal capacity to enter into these Terms</li>
              <li>You are not prohibited from using the Service under applicable law</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Age Verification</h3>
            <p className="text-gray-700 mb-4">
              During account registration, you will be required to provide your birth month and year. We will calculate your age to verify you meet the minimum age requirement.
            </p>
            <p className="text-gray-700 mb-4">
              If you are under 18 years old, you will be PERMANENTLY RESTRICTED from using the Service. This restriction cannot be appealed or bypassed.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Parental Responsibility</h3>
            <p className="text-gray-700 mb-4">
              If you are a parent or guardian and discover that your child under 18 has created an account, please contact us immediately at [INSERT CONTACT EMAIL] so we can delete the account.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.4 Misrepresentation of Age</h3>
            <p className="text-gray-700">
              Providing false information about your age is a violation of these Terms and may result in immediate account termination. We reserve the right to verify your age at any time and suspend accounts if we suspect age misrepresentation.
            </p>
          </section>

          <section id="account" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration and Security</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Account Creation</h3>
            <p className="text-gray-700 mb-4">To use certain features of the Service, you must create an account by providing:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>A unique username</li>
              <li>Your birth month and year</li>
              <li>Any other required information</li>
            </ul>
            <p className="text-gray-700 mb-4">You agree to provide accurate, current, and complete information during registration.</p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Username Policy</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Usernames must be unique within the NoCap system</li>
              <li>If your desired username is already taken, a numeric suffix will be automatically added</li>
              <li>Usernames cannot be changed after account creation</li>
              <li>Usernames must not contain offensive, misleading, or impersonating content</li>
              <li>We reserve the right to reclaim or reassign usernames that violate these Terms</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 NoCap ID</h3>
            <p className="text-gray-700 mb-4">
              Upon account creation, you will be assigned a unique numeric "NoCap ID" for identification purposes. This ID cannot be changed and will be visible to other users.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.4 Account Security</h3>
            <p className="text-gray-700 mb-4">You are responsible for:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Maintaining the security of your device and account access</li>
              <li>All activities that occur under your account</li>
              <li>Immediately notifying us of any unauthorized use of your account</li>
            </ul>
            <p className="text-gray-700 mb-4">We are not liable for any loss or damage arising from unauthorized account access.</p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.5 Account Limitations</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>You may only create ONE account per person</li>
              <li>You may not create accounts using false information or on behalf of others without permission</li>
              <li>You may not buy, sell, rent, or transfer your account to others</li>
            </ul>
          </section>

          <section id="service" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Description of Service</h2>
            <p className="text-gray-700 mb-4">NoCap provides the following features:</p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Anonymous Messaging</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Receive anonymous messages and questions from others via shareable links</li>
              <li>Send anonymous messages to other users</li>
              <li>View metadata "clues" about message senders (with NoCap Pro or unlock feature)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Games Feature</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Create games that others can rate</li>
              <li>Share questions via social media</li>
              <li>View aggregate ratings and statistics</li>
              <li>Receive feedback from web visitors</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Social Sharing</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Share questions to Instagram Stories or Snapchat</li>
              <li>Generate shareable images with question content</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.4 Content Moderation Tools</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Hidden Words: Filter messages containing specific words or phrases</li>
              <li>Reporting: Report inappropriate messages for review</li>
              <li>Blocking: Block specific senders to prevent future messages</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.5 NoCap Pro (Optional)</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Unlock "Reveal Sender Clues" feature to view full message metadata</li>
              <li>Access premium features (as they become available)</li>
            </ul>
          </section>

          <section id="conduct" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Conduct and Prohibited Activities</h2>
            <p className="text-gray-700 mb-4">You agree NOT to use the Service to:</p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Illegal Activities</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Violate any local, state, national, or international law or regulation</li>
              <li>Engage in any unlawful, fraudulent, or deceptive activity</li>
              <li>Solicit or facilitate illegal transactions</li>
              <li>Engage in money laundering, terrorism financing, or other criminal activity</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Harmful Content</h3>
            <p className="text-gray-700 mb-4">Post, send, or share content that is:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Threatening, harassing, bullying, or abusive</li>
              <li>Hateful, racist, sexist, or discriminatory</li>
              <li>Sexually explicit, pornographic, or obscene</li>
              <li>Violent, graphic, or promotes violence</li>
              <li>Defamatory, libelous, or invasive of privacy</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Engage in cyberbullying, harassment, stalking, or intimidation</li>
              <li>Target individuals based on race, religion, gender, sexual orientation, disability, or other protected characteristics</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3 Harmful to Minors</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Target, exploit, or harm children or minors in any way</li>
              <li>Share content depicting minors in harmful or inappropriate situations</li>
              <li>Attempt to contact, communicate with, or solicit minors</li>
              <li>Share links or content intended to attract minors to the Service</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.4 Impersonation and Fraud</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Impersonate any person or entity</li>
              <li>Misrepresent your affiliation with any person or organization</li>
              <li>Create fake or misleading accounts</li>
              <li>Use another person's identity, credentials, or information without permission</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.5 Spam and Abuse</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Send unsolicited or unauthorized advertising, spam, or junk messages</li>
              <li>Use automated systems (bots, scripts, scrapers) to access the Service</li>
              <li>Engage in mass messaging, flooding, or other disruptive behavior</li>
              <li>Create multiple accounts to evade bans or restrictions</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.6 Intellectual Property Violations</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Post content that infringes on copyrights, trademarks, patents, or other intellectual property rights</li>
              <li>Share pirated software, media, or other unauthorized content</li>
              <li>Use NoCap's trademarks, logos, or branding without permission</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.7 Security Violations</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Attempt to gain unauthorized access to the Service, other accounts, or systems</li>
              <li>Hack, penetrate, or circumvent security measures</li>
              <li>Reverse engineer, decompile, or disassemble the Service</li>
              <li>Introduce viruses, malware, or other harmful code</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.8 Service Manipulation</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Manipulate ratings, votes, or feedback through fraudulent means</li>
              <li>Use multiple accounts or IP addresses to artificially inflate metrics</li>
              <li>Coordinate with others to manipulate Service features</li>
              <li>Abuse referral, reward, or promotional systems</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.9 Misuse of Anonymous Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Use anonymity to harass, threaten, or harm others</li>
              <li>Send fake, misleading, or deceptive anonymous messages</li>
              <li>Abuse the anonymous messaging feature to evade accountability for harmful conduct</li>
            </ul>
          </section>

          <section id="liability" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Limitation of Liability</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">13.1 General Limitation</h3>
            <p className="text-gray-700 mb-4">
              Notwithstanding any damages that you might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by you through the Service or 100 USD if you haven't purchased anything through the Service.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">13.2 Exclusion of Damages</h3>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of these Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">13.3 State Law Variations</h3>
            <p className="text-gray-700 mb-4">
              Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.
            </p>
          </section>

          <div className="my-12 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-200 shadow-lg">
            <div className="text-center">
              <span className="text-4xl mb-4 inline-block">📄</span>
              <p className="text-gray-700 font-semibold mb-3">
                Note: This page shows a formatted excerpt of our Terms of Use.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The complete terms include sections 6-12 and 14-20 covering Content & Intellectual Property, Anonymous Messaging, User-Generated Content, Content Moderation, NoCap Pro, Disclaimers, Warranties, Indemnification, Third-Party Services, Termination, Dispute Resolution, Governing Law, and more.
              </p>
              <p className="text-gray-600 text-sm mt-4">
                For the complete Terms of Use document, please scroll down or <a href="#contact" className="font-semibold hover:underline">contact us</a> for assistance.
              </p>
            </div>
          </div>

          <section id="contact" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">21. Contact Information</h2>
            <p className="text-gray-700 mb-6">
              If you have questions, concerns, or feedback regarding these Terms of Use, please contact us:
            </p>
            <div className="bg-gradient-to-br from-[#FCF300] to-yellow-100 p-6 rounded-xl border-2 border-black shadow-lg">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📧</span>
                  <div>
                    <p className="text-black font-bold">Email</p>
                    <p className="text-gray-900">nocap.app1@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">🌐</span>
                  <div>
                    <p className="text-black font-bold">Website</p>
                    <p className="text-gray-900">nocap.bio</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mt-6 text-sm">
              💼 For legal inquiries, include "Legal Inquiry" in the subject line.
            </p>
            <p className="text-gray-700 text-sm">
              ⏱️ We will respond to your inquiry within a reasonable timeframe.
            </p>
          </section>

          <div className="border-t-4 border-[#FCF300] pt-10 mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Acknowledgment</h2>
            <div className="bg-gradient-to-r from-[#FCF300] to-yellow-200 rounded-xl p-6 mb-6 border-2 border-black shadow-lg">
              <p className="text-black font-bold text-center leading-relaxed">
                BY USING NOCAP, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF USE AND OUR PRIVACY POLICY.
              </p>
              <p className="text-black font-semibold text-center mt-3">
                IF YOU DO NOT AGREE, DO NOT USE THE SERVICE.
              </p>
            </div>
            <p className="text-center text-gray-500 text-sm mt-8 font-medium">
              © 2026 NoCap. All rights reserved.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
