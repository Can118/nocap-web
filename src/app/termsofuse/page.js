export const metadata = {
  title: 'Terms of Use - NoCap',
  description: 'Terms of Use for NoCap anonymous messaging app',
}

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">NoCap Terms of Use</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: January 6, 2026</p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <p className="text-sm text-gray-800">
              <strong>IMPORTANT:</strong> PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING NOCAP. BY ACCESSING OR USING THE SERVICE, YOU AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE THE SERVICE.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Table of Contents</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
            <li><a href="#acceptance" className="text-blue-600 hover:underline">Acceptance of Terms</a></li>
            <li><a href="#eligibility" className="text-blue-600 hover:underline">Eligibility and Age Restrictions</a></li>
            <li><a href="#account" className="text-blue-600 hover:underline">Account Registration and Security</a></li>
            <li><a href="#service" className="text-blue-600 hover:underline">Description of Service</a></li>
            <li><a href="#conduct" className="text-blue-600 hover:underline">User Conduct and Prohibited Activities</a></li>
            <li><a href="#ip" className="text-blue-600 hover:underline">Content and Intellectual Property</a></li>
            <li><a href="#anonymous" className="text-blue-600 hover:underline">Anonymous Messaging and Privacy</a></li>
            <li><a href="#ugc" className="text-blue-600 hover:underline">User-Generated Content</a></li>
            <li><a href="#moderation" className="text-blue-600 hover:underline">Content Moderation and Reporting</a></li>
            <li><a href="#pro" className="text-blue-600 hover:underline">NoCap Pro and Paid Features</a></li>
            <li><a href="#disclaimers" className="text-blue-600 hover:underline">Disclaimers and Limitations on Service</a></li>
            <li><a href="#warranties" className="text-blue-600 hover:underline">Disclaimer of Warranties</a></li>
            <li><a href="#liability" className="text-blue-600 hover:underline">Limitation of Liability</a></li>
            <li><a href="#indemnification" className="text-blue-600 hover:underline">Indemnification</a></li>
            <li><a href="#third-party" className="text-blue-600 hover:underline">Third-Party Services and Links</a></li>
            <li><a href="#termination" className="text-blue-600 hover:underline">Termination and Account Suspension</a></li>
            <li><a href="#dispute" className="text-blue-600 hover:underline">Dispute Resolution and Arbitration</a></li>
            <li><a href="#governing" className="text-blue-600 hover:underline">Governing Law</a></li>
            <li><a href="#changes" className="text-blue-600 hover:underline">Changes to Terms</a></li>
            <li><a href="#misc" className="text-blue-600 hover:underline">Miscellaneous</a></li>
            <li><a href="#contact" className="text-blue-600 hover:underline">Contact Information</a></li>
          </ol>

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
              <li>Your gender</li>
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
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
              <p className="text-sm text-gray-800">
                <strong>IMPORTANT:</strong> "Anonymous" messaging is NOT fully anonymous. We collect metadata (device info, location, IP address) that may be shared with message recipients.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Betting/Games Feature</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Create questions or "bets" that others can rate</li>
              <li>Share questions via social media</li>
              <li>View aggregate ratings and statistics</li>
              <li>Receive feedback from web visitors</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Social Sharing</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Share questions to Instagram Stories, Snapchat, TikTok, or WhatsApp</li>
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
              <li>Unlock "Reveal Sender Info" feature to view full message metadata</li>
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
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
              <p className="text-sm text-gray-800">
                <strong>IMPORTANT:</strong> NoCap is for users 18+ only. Any activity involving minors will result in immediate account termination and reporting to law enforcement.
              </p>
            </div>

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

          <div className="my-12 p-6 bg-gray-100 rounded-lg">
            <p className="text-center text-gray-600">
              <strong>Note:</strong> This page shows a formatted excerpt of our Terms of Use. The complete terms include sections 6-21 covering Content & Intellectual Property, Anonymous Messaging, User-Generated Content, Content Moderation, NoCap Pro, Disclaimers, Warranties, Liability, Indemnification, Third-Party Services, Termination, Dispute Resolution, Governing Law, and more.
            </p>
            <p className="text-center text-gray-600 mt-4">
              For the complete Terms of Use document, please scroll down or <a href="#contact" className="text-blue-600 hover:underline">contact us</a> for assistance.
            </p>
          </div>

          <section id="contact" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">21. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have questions, concerns, or feedback regarding these Terms of Use, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> [INSERT YOUR SUPPORT EMAIL]</p>
              <p className="text-gray-700"><strong>Website:</strong> nocap.bio</p>
              <p className="text-gray-700"><strong>Address:</strong> [INSERT YOUR BUSINESS ADDRESS]</p>
            </div>
            <p className="text-gray-700 mt-4">
              For legal inquiries, include "Legal Inquiry" in the subject line.
            </p>
            <p className="text-gray-700">
              We will respond to your inquiry within a reasonable timeframe.
            </p>
          </section>

          <div className="border-t-2 border-gray-300 pt-8 mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acknowledgment</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-gray-800 font-semibold">
                BY USING NOCAP, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF USE AND OUR PRIVACY POLICY.
              </p>
              <p className="text-gray-800 mt-2">
                IF YOU DO NOT AGREE, DO NOT USE THE SERVICE.
              </p>
            </div>
            <p className="text-center text-gray-500 text-sm mt-8">
              © 2026 NoCap. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
