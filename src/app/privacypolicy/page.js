export const metadata = {
  title: 'Privacy Policy - NoCap',
  description: 'Privacy Policy for NoCap anonymous messaging app',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">NoCap Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: January 6, 2026</p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
            <p className="text-sm text-gray-800">
              <strong>IMPORTANT:</strong> This Privacy Policy describes how NoCap ("we," "us," or "our") collects, uses, discloses, and protects your personal information when you use the NoCap mobile application and associated services. By using NoCap, you agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Table of Contents</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
            <li><a href="#age" className="text-blue-600 hover:underline">Age Restrictions and Eligibility</a></li>
            <li><a href="#collect" className="text-blue-600 hover:underline">Information We Collect</a></li>
            <li><a href="#use" className="text-blue-600 hover:underline">How We Use Your Information</a></li>
            <li><a href="#sharing" className="text-blue-600 hover:underline">Information Sharing and Disclosure</a></li>
            <li><a href="#retention" className="text-blue-600 hover:underline">Data Retention</a></li>
            <li><a href="#rights" className="text-blue-600 hover:underline">Your Privacy Rights and Choices</a></li>
            <li><a href="#third-party" className="text-blue-600 hover:underline">Third-Party Services</a></li>
            <li><a href="#international" className="text-blue-600 hover:underline">International Data Transfers</a></li>
            <li><a href="#coppa" className="text-blue-600 hover:underline">Children's Privacy (COPPA Compliance)</a></li>
            <li><a href="#security" className="text-blue-600 hover:underline">Data Security</a></li>
            <li><a href="#california" className="text-blue-600 hover:underline">California Privacy Rights (CCPA)</a></li>
            <li><a href="#changes" className="text-blue-600 hover:underline">Changes to This Privacy Policy</a></li>
            <li><a href="#contact" className="text-blue-600 hover:underline">Contact Us</a></li>
          </ol>

          <section id="age" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Age Restrictions and Eligibility</h2>
            <p className="text-gray-700 mb-4">
              NoCap is intended ONLY for users who are <strong>18 years of age or older</strong>.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Age Verification</h3>
            <p className="text-gray-700 mb-4">
              During account creation, you will be asked to provide your birth month and year. If you are under 18 years old, you will be PERMANENTLY RESTRICTED from using the Service. We do not knowingly collect personal information from anyone under 18 years of age.
            </p>

            <p className="text-gray-700 mb-4">If you are under 18, DO NOT:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Use or access the Service</li>
              <li>Provide any information to NoCap</li>
              <li>Create an account or profile</li>
            </ul>

            <p className="text-gray-700">
              If we discover that we have collected personal information from someone under 18 without verification of parental consent, we will delete that information immediately.
            </p>
          </section>

          <section id="collect" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Information You Provide Directly</h3>
            <p className="text-gray-700 mb-4">When you create an account and use NoCap, we collect:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li><strong>Username:</strong> A unique username you select during registration</li>
              <li><strong>Gender:</strong> Your self-identified gender (for profile display purposes)</li>
              <li><strong>Birth Month and Year:</strong> Used to verify you meet the minimum age requirement (18+)</li>
              <li><strong>Age:</strong> Calculated from your birth month and year</li>
              <li><strong>Messages and Content:</strong> Questions, answers, and anonymous messages you send or receive</li>
              <li><strong>User-Generated Content:</strong> Questions you create for betting/rating features</li>
              <li><strong>Hidden Words List:</strong> Words or phrases you choose to filter from your inbox (stored locally on your device)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Information Collected Automatically</h3>
            <p className="text-gray-700 mb-4">When you use NoCap, we automatically collect the following information:</p>

            <h4 className="text-lg font-semibold text-gray-700 mb-2">Device Information:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Device model, brand, and manufacturer</li>
              <li>Operating system type and version (iOS or Android)</li>
              <li>Device language settings</li>
              <li>Unique device identifiers</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-700 mb-2">Location Information:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>IP address</li>
              <li>City-level location (derived from IP address using third-party geolocation service)</li>
              <li>Region/state</li>
              <li>Country</li>
              <li>Formatted location string (e.g., "near [City Name]")</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-sm text-gray-800">
                <strong>IMPORTANT:</strong> We use IP-based geolocation, NOT GPS. Your precise location is never collected. We use the third-party service ip-api.com to determine your approximate city-level location based on your IP address.
              </p>
            </div>

            <h4 className="text-lg font-semibold text-gray-700 mb-2">Usage Information:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Message timestamps (when sent and when read)</li>
              <li>Message read/unread status</li>
              <li>Questions created, modified, or deleted</li>
              <li>Interactions with the Service (taps, views, navigation)</li>
              <li>Reports, blocks, and content moderation actions you take</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Information from Web Visitors (Anonymous Ratings/Feedback)</h3>
            <p className="text-gray-700 mb-4">When someone visits a NoCap shareable link via web browser to rate or respond to questions, we collect:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>IP address</li>
              <li>Browser fingerprint (for analytics and fraud prevention)</li>
              <li>Rating/feedback value</li>
              <li>Timestamp of interaction</li>
            </ul>
            <p className="text-gray-700 mb-4">
              WEB VISITORS ARE NOT REQUIRED TO CREATE AN ACCOUNT. However, their IP address and browser fingerprint are collected automatically when they submit ratings or feedback.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.4 Information We Do Not Collect</h3>
            <p className="text-gray-700 mb-4">NoCap does NOT collect:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Real names (unless you include them in your username)</li>
              <li>Email addresses or phone numbers</li>
              <li>Precise GPS location coordinates</li>
              <li>Contact lists or address books</li>
              <li>Photos, videos, or media from your device library</li>
              <li>Biometric data</li>
              <li>Financial information (if payment features are added, we will update this policy)</li>
              <li>Social media passwords or credentials</li>
            </ul>
          </section>

          <section id="use" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect for the following purposes:</p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Core Service Functionality</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li><strong>Account Creation and Authentication:</strong> To create and maintain your NoCap account</li>
              <li><strong>Message Delivery:</strong> To deliver anonymous messages and questions to recipients</li>
              <li><strong>Identity Clues:</strong> To provide "clues" about message senders (device info, location, language) to message recipients who have NoCap Pro or unlock this feature</li>
              <li><strong>User Identification:</strong> To assign you a unique NoCap ID for identification within the Service</li>
              <li><strong>Content Display:</strong> To display your username, gender, and NoCap ID in your profile</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Safety and Security</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li><strong>Fraud Prevention:</strong> To detect and prevent fraudulent activity, spam, and abuse</li>
              <li><strong>Content Moderation:</strong> To enable user-controlled content filtering via Hidden Words</li>
              <li><strong>Reporting and Blocking:</strong> To process user reports of inappropriate content and enforce blocks</li>
              <li><strong>Legal Compliance:</strong> To comply with legal obligations and respond to lawful requests from authorities</li>
              <li><strong>Service Protection:</strong> To protect the rights, property, and safety of NoCap, our users, and the public</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Service Improvement</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li><strong>Analytics:</strong> To understand how users interact with NoCap and improve features</li>
              <li><strong>Performance Monitoring:</strong> To monitor and improve Service performance and reliability</li>
              <li><strong>Bug Fixes:</strong> To identify and resolve technical issues</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.4 Communications</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li><strong>Service Updates:</strong> To send you important updates about the Service, including changes to this Privacy Policy or Terms of Use</li>
              <li><strong>Support Responses:</strong> To respond to your inquiries and provide customer support</li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
              <p className="text-gray-800 font-semibold mb-2">WE DO NOT USE YOUR INFORMATION FOR:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Targeted advertising (we do not currently run ads)</li>
                <li>Selling your data to third parties</li>
                <li>Creating detailed user profiles for marketing purposes</li>
              </ul>
            </div>
          </section>

          <section id="sharing" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Information Shared with Other Users</h3>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">Message Metadata ("Clues"):</h4>
            <p className="text-gray-700 mb-4">
              When you send an anonymous message to another user, the following information is collected and MAY BE SHARED with the message recipient if they have NoCap Pro or unlock the "Reveal Sender Info" feature:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Your device model and operating system</li>
              <li>Your approximate location (city-level)</li>
              <li>Your device language</li>
              <li>Your IP address</li>
              <li>Your gender (if you have a NoCap account)</li>
              <li>Your NoCap ID (if you have a NoCap account)</li>
              <li>Timestamp when the message was sent</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-sm text-gray-800">
                <strong>IMPORTANT:</strong> Even if you send an "anonymous" message, this metadata is collected and can be revealed to the recipient. True anonymity is not guaranteed.
              </p>
            </div>

            <h4 className="text-lg font-semibold text-gray-700 mb-2">Public Information:</h4>
            <p className="text-gray-700 mb-4">
              Your username, gender, and NoCap ID are visible to other users within the Service.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Information Shared with Third Parties</h3>
            <p className="text-gray-700 mb-4">We share information with the following third parties:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li><strong>Supabase (Backend Service Provider):</strong> We use Supabase for database hosting, authentication, and backend infrastructure. Supabase has access to all data stored in our database. Review Supabase's privacy policy at <a href="https://supabase.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://supabase.com/privacy</a></li>
              <li><strong>ip-api.com (Geolocation Service):</strong> We share your IP address with ip-api.com to determine your approximate city-level location. This is a free third-party service. Review ip-api.com's terms at <a href="https://ip-api.com/docs/legal" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://ip-api.com/docs/legal</a></li>
              <li><strong>Social Media Platforms:</strong> When you use the "Share to Story" feature, we may share limited information with Instagram, Snapchat, TikTok, or WhatsApp to enable sharing functionality. This is governed by those platforms' privacy policies.</li>
              <li><strong>Service Providers:</strong> We may engage other third-party service providers to perform functions on our behalf (e.g., hosting, analytics, customer support). These providers will have access to your information only to perform specific tasks and are obligated to protect your data.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Legal Disclosures</h3>
            <p className="text-gray-700 mb-4">We may disclose your information if required to do so by law or in response to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Valid legal requests from government authorities, law enforcement, or courts</li>
              <li>Subpoenas, court orders, or legal processes</li>
              <li>Requests to comply with legal obligations or protect legal rights</li>
              <li>Situations involving potential threats to physical safety</li>
              <li>Suspected fraud, security breaches, or violations of our Terms of Use</li>
            </ul>
            <p className="text-gray-700 mb-4">We will notify you of legal demands for your information when permitted by law.</p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.4 Business Transfers</h3>
            <p className="text-gray-700 mb-4">
              If NoCap is involved in a merger, acquisition, bankruptcy, or sale of assets, your information may be transferred as part of that transaction. We will provide notice before your information becomes subject to a different privacy policy.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.5 Information We Do Not Sell</h3>
            <p className="text-gray-700 font-semibold">
              We DO NOT sell, rent, or trade your personal information to third parties for their marketing purposes.
            </p>
          </section>

          <div className="my-12 p-6 bg-gray-100 rounded-lg">
            <p className="text-center text-gray-600">
              <strong>Note:</strong> This page shows a formatted excerpt of our Privacy Policy. The complete policy includes sections 5-13 covering Data Retention, Your Privacy Rights, Third-Party Services, International Data Transfers, Children's Privacy (COPPA), Data Security, California Privacy Rights (CCPA), and more.
            </p>
            <p className="text-center text-gray-600 mt-4">
              For the complete Privacy Policy document, please scroll down or <a href="#contact" className="text-blue-600 hover:underline">contact us</a> for assistance.
            </p>
          </div>

          <section id="coppa" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy (COPPA Compliance)</h2>
            <p className="text-gray-700 mb-4">
              NoCap is strictly intended for users <strong>18 years of age or older</strong>.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">COPPA Compliance</h3>
            <p className="text-gray-700 mb-4">
              NoCap complies with the Children's Online Privacy Protection Act (COPPA). We do NOT knowingly collect personal information from children under 13 years of age.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Age Gate Enforcement</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>All users must verify their age during onboarding</li>
              <li>Users who indicate they are under 18 are PERMANENTLY RESTRICTED from using the Service</li>
              <li>A restriction flag is set in local device storage to prevent re-entry</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Parental Rights</h3>
            <p className="text-gray-700 mb-4">
              If you are a parent or guardian and believe your child under 18 has provided information to NoCap, please contact us immediately at [INSERT CONTACT EMAIL]. We will delete the child's information from our systems.
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <p className="text-gray-800 font-semibold mb-2">IMPORTANT FOR PARENTS:</p>
              <p className="text-gray-700">
                Even though NoCap requires users to be 18+, we cannot guarantee that underage users will not attempt to access the Service by misrepresenting their age. Parents should monitor their children's online activity and use parental control tools.
              </p>
            </div>
          </section>

          <section id="contact" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> [INSERT YOUR SUPPORT EMAIL]</p>
              <p className="text-gray-700"><strong>Website:</strong> nocap.bio</p>
              <p className="text-gray-700"><strong>Address:</strong> [INSERT YOUR BUSINESS ADDRESS]</p>
            </div>
            <p className="text-gray-700 mt-4">
              For data subject access requests, account deletion requests, or privacy inquiries, please include "Privacy Request" in the subject line.
            </p>
            <p className="text-gray-700">
              We will respond to your inquiry within 30 days.
            </p>
          </section>

          <div className="border-t-2 border-gray-300 pt-8 mt-12">
            <p className="text-center text-gray-500 text-sm">
              © 2026 NoCap. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
