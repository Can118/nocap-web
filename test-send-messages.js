// Test script to send sample messages to Supabase
// Run with: node test-send-messages.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lnxrfumaetkrfhkuhdnj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxueHJmdW1hZXRrcmZoa3VoZG5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcwNzIxOTUsImV4cCI6MjA4MjY0ODE5NX0.rYjdw_vHej97rb037cq0RZwEfrnwb6ObMezLH5Ten2I';

const supabase = createClient(supabaseUrl, supabaseKey);

async function sendTestMessages() {
  console.log('🚀 Starting test message creation...\n');

  // Step 1: Get a user from the database
  console.log('📋 Step 1: Fetching user from database...');
  const { data: users, error: userError } = await supabase
    .from('users')
    .select('id, nocap_id, username')
    .limit(1);

  if (userError || !users || users.length === 0) {
    console.error('❌ Error fetching user:', userError);
    console.log('💡 Make sure you have at least one user in the database.');
    return;
  }

  const user = users[0];
  console.log(`✅ Found user: ${user.username || user.nocap_id} (ID: ${user.id})\n`);

  // Step 2: Check if source column exists
  console.log('📋 Step 2: Checking if source column exists...');
  const { data: testInsert, error: columnError } = await supabase
    .from('messages')
    .select('source')
    .limit(1);

  if (columnError && columnError.message.includes('column "source" does not exist')) {
    console.log('⚠️  Source column does not exist yet!');
    console.log('📝 Please run the database migration first:');
    console.log(`
ALTER TABLE messages
ADD COLUMN source TEXT CHECK (source IN ('instagram', 'snapchat', 'other'))
DEFAULT 'instagram';
    `);
    console.log('\nSending messages WITHOUT source tracking for now...\n');
  } else {
    console.log('✅ Source column exists!\n');
  }

  // Step 3: Create test messages
  console.log('📋 Step 3: Creating test messages...\n');

  const testMessages = [
    {
      question: 'you think i check your instagram story every day? 👀',
      source: 'instagram',
      emoji: '💜'
    },
    {
      question: 'no cap you\'re always on my mind 💭',
      source: 'instagram',
      emoji: '💜'
    },
    {
      question: 'bet you can\'t guess who this is 😏',
      source: 'snapchat',
      emoji: '💛'
    },
    {
      question: 'you think i stalk your snap story? maybe 👻',
      source: 'snapchat',
      emoji: '💛'
    }
  ];

  for (const msg of testMessages) {
    const messageData = {
      sender_id: null, // Anonymous
      receiver_id: user.id,
      question: msg.question,
      answer: null,
      device_model: 'Test Device',
      device_os: 'Test OS',
      device_language: 'en',
      location_city: 'Test City',
      location_formatted: 'near Test City',
      ip_address: '127.0.0.1'
    };

    // Add source if column exists
    if (!columnError || !columnError.message.includes('column "source" does not exist')) {
      messageData.source = msg.source;
    }

    const { data, error } = await supabase
      .from('messages')
      .insert([messageData])
      .select()
      .single();

    if (error) {
      console.error(`❌ Failed to send message:`, error.message);
    } else {
      console.log(`${msg.emoji} Sent ${msg.source.toUpperCase()} message: "${msg.question}"`);
    }
  }

  console.log('\n✅ Test messages sent successfully!');
  console.log('📱 Open the mobile app Inbox tab to see the envelopes!');
  console.log(`
Expected results:
  💜 Purple gradient envelopes = Instagram messages (unread)
  💛 Yellow envelopes = Snapchat messages (unread)
  `);
}

// Run the script
sendTestMessages().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
