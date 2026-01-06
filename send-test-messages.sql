-- ================================================================
-- SEND TEST MESSAGES - Run this in Supabase SQL Editor
-- ================================================================
-- This will create 4 test messages for you to see in the mobile app
-- ================================================================

-- First, let's make sure the source column exists
-- (Run the migration if you haven't already)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_name = 'messages' AND column_name = 'source'
    ) THEN
        ALTER TABLE messages
        ADD COLUMN source TEXT CHECK (source IN ('instagram', 'snapchat', 'other'))
        DEFAULT 'instagram';

        RAISE NOTICE '✅ Source column added successfully!';
    ELSE
        RAISE NOTICE '✅ Source column already exists!';
    END IF;
END $$;

-- Get the first user from the database
DO $$
DECLARE
    target_user_id UUID;
    test_message_id UUID;
BEGIN
    -- Get a user (you can replace this with your specific user ID)
    SELECT id INTO target_user_id FROM users LIMIT 1;

    IF target_user_id IS NULL THEN
        RAISE EXCEPTION '❌ No users found in database. Please create a user first.';
    END IF;

    RAISE NOTICE '📧 Sending test messages to user: %', target_user_id;

    -- Message 1: Instagram message (purple gradient envelope)
    INSERT INTO messages (
        sender_id,
        receiver_id,
        question,
        source,
        device_model,
        device_os,
        device_language,
        location_city,
        location_formatted,
        ip_address
    ) VALUES (
        NULL, -- Anonymous
        target_user_id,
        'you think i check your instagram story every day? 👀',
        'instagram',
        'iPhone 15 Pro',
        'iOS 17',
        'en',
        'San Francisco',
        'near San Francisco',
        '127.0.0.1'
    ) RETURNING id INTO test_message_id;
    RAISE NOTICE '💜 Sent Instagram message 1: %', test_message_id;

    -- Message 2: Instagram message (purple gradient envelope)
    INSERT INTO messages (
        sender_id,
        receiver_id,
        question,
        source,
        device_model,
        device_os,
        device_language,
        location_city,
        location_formatted,
        ip_address
    ) VALUES (
        NULL,
        target_user_id,
        'no cap you''re always on my mind 💭',
        'instagram',
        'iPhone 14',
        'iOS 16',
        'en',
        'Los Angeles',
        'near Los Angeles',
        '127.0.0.1'
    ) RETURNING id INTO test_message_id;
    RAISE NOTICE '💜 Sent Instagram message 2: %', test_message_id;

    -- Message 3: Snapchat message (yellow envelope)
    INSERT INTO messages (
        sender_id,
        receiver_id,
        question,
        source,
        device_model,
        device_os,
        device_language,
        location_city,
        location_formatted,
        ip_address
    ) VALUES (
        NULL,
        target_user_id,
        'bet you can''t guess who this is 😏',
        'snapchat',
        'Samsung Galaxy S23',
        'Android 14',
        'en',
        'New York',
        'near New York',
        '127.0.0.1'
    ) RETURNING id INTO test_message_id;
    RAISE NOTICE '💛 Sent Snapchat message 1: %', test_message_id;

    -- Message 4: Snapchat message (yellow envelope)
    INSERT INTO messages (
        sender_id,
        receiver_id,
        question,
        source,
        device_model,
        device_os,
        device_language,
        location_city,
        location_formatted,
        ip_address
    ) VALUES (
        NULL,
        target_user_id,
        'you think i stalk your snap story? maybe 👻',
        'snapchat',
        'Google Pixel 8',
        'Android 14',
        'en',
        'Chicago',
        'near Chicago',
        '127.0.0.1'
    ) RETURNING id INTO test_message_id;
    RAISE NOTICE '💛 Sent Snapchat message 2: %', test_message_id;

    RAISE NOTICE '';
    RAISE NOTICE '✅ All 4 test messages sent successfully!';
    RAISE NOTICE '📱 Open the mobile app Inbox tab to see:';
    RAISE NOTICE '   💜 2 Purple gradient envelopes (Instagram)';
    RAISE NOTICE '   💛 2 Yellow envelopes (Snapchat)';
    RAISE NOTICE '';

END $$;

-- Verify the messages were created
SELECT
    id,
    LEFT(question, 50) as message_preview,
    source,
    sent_at,
    CASE
        WHEN read_at IS NULL THEN 'UNREAD ✅'
        ELSE 'READ'
    END as status
FROM messages
WHERE receiver_id = (SELECT id FROM users LIMIT 1)
ORDER BY sent_at DESC
LIMIT 10;
