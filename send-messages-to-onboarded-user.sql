-- ================================================================
-- SEND TEST MESSAGES TO YOUR ONBOARDED USER
-- ================================================================
-- This finds the most recent user and sends messages to them
-- ================================================================

DO $$
DECLARE
    target_user_id UUID;
    target_user_nocap_id INTEGER;
    test_message_id UUID;
BEGIN
    -- Get the most recently created user (your onboarded user)
    SELECT id, nocap_id INTO target_user_id, target_user_nocap_id
    FROM users
    ORDER BY created_at DESC
    LIMIT 1;

    IF target_user_id IS NULL THEN
        RAISE EXCEPTION '❌ No users found in database.';
    END IF;

    RAISE NOTICE '📧 Sending test messages to user with NoCap ID: %', target_user_nocap_id;
    RAISE NOTICE '📧 User UUID: %', target_user_id;
    RAISE NOTICE '';

    -- Message 1: Instagram message
    INSERT INTO messages (
        sender_id, receiver_id, question, source,
        device_model, device_os, device_language,
        location_city, location_formatted, ip_address
    ) VALUES (
        NULL, target_user_id,
        'you think i check your instagram story every day? 👀',
        'instagram',
        'iPhone 15 Pro', 'iOS 17', 'en',
        'San Francisco', 'near San Francisco', '127.0.0.1'
    ) RETURNING id INTO test_message_id;
    RAISE NOTICE '💜 Instagram message 1: %', test_message_id;

    -- Message 2: Instagram message
    INSERT INTO messages (
        sender_id, receiver_id, question, source,
        device_model, device_os, device_language,
        location_city, location_formatted, ip_address
    ) VALUES (
        NULL, target_user_id,
        'no cap you''re always on my mind 💭',
        'instagram',
        'iPhone 14', 'iOS 16', 'en',
        'Los Angeles', 'near Los Angeles', '127.0.0.1'
    ) RETURNING id INTO test_message_id;
    RAISE NOTICE '💜 Instagram message 2: %', test_message_id;

    -- Message 3: Snapchat message
    INSERT INTO messages (
        sender_id, receiver_id, question, source,
        device_model, device_os, device_language,
        location_city, location_formatted, ip_address
    ) VALUES (
        NULL, target_user_id,
        'bet you can''t guess who this is 😏',
        'snapchat',
        'Samsung Galaxy S23', 'Android 14', 'en',
        'New York', 'near New York', '127.0.0.1'
    ) RETURNING id INTO test_message_id;
    RAISE NOTICE '💛 Snapchat message 1: %', test_message_id;

    -- Message 4: Snapchat message
    INSERT INTO messages (
        sender_id, receiver_id, question, source,
        device_model, device_os, device_language,
        location_city, location_formatted, ip_address
    ) VALUES (
        NULL, target_user_id,
        'you think i stalk your snap story? maybe 👻',
        'snapchat',
        'Google Pixel 8', 'Android 14', 'en',
        'Chicago', 'near Chicago', '127.0.0.1'
    ) RETURNING id INTO test_message_id;
    RAISE NOTICE '💛 Snapchat message 2: %', test_message_id;

    RAISE NOTICE '';
    RAISE NOTICE '✅ All 4 test messages sent!';
    RAISE NOTICE '📱 Now, make sure you are LOGGED IN to the app';
    RAISE NOTICE '';

END $$;

-- Show all messages for the most recent user
SELECT
    u.nocap_id as "NoCap ID",
    u.username as "Username",
    m.id as "Message ID",
    LEFT(m.question, 40) as "Message Preview",
    m.source as "Source",
    CASE WHEN m.read_at IS NULL THEN 'UNREAD ✅' ELSE 'READ' END as "Status"
FROM messages m
JOIN users u ON m.receiver_id = u.id
WHERE m.receiver_id = (SELECT id FROM users ORDER BY created_at DESC LIMIT 1)
ORDER BY m.sent_at DESC
LIMIT 10;
