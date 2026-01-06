-- ================================================================
-- SEND TEST MESSAGES WITH PROPER QUESTION + ANSWER FORMAT
-- ================================================================
-- User ID: f1af9a9e-0c12-4f11-8f67-b5a19c89ccd5 (test99999)
-- ================================================================
-- NOTE: question = what app user created
--       answer = what anonymous sender typed
-- ================================================================

DO $$
DECLARE
    target_user_id UUID := 'f1af9a9e-0c12-4f11-8f67-b5a19c89ccd5';
    test_message_id UUID;
BEGIN
    RAISE NOTICE '📧 Sending test messages to test99999';
    RAISE NOTICE '📧 User ID: %', target_user_id;
    RAISE NOTICE '';

    -- Message 1: Instagram
    INSERT INTO messages (
        sender_id, receiver_id, question, answer, source,
        device_model, device_os, device_language,
        location_city, location_formatted, ip_address
    ) VALUES (
        NULL, target_user_id,
        'you think i stalk you on a fake account?',
        'ofc you are following me every single dayy slayyy',
        'instagram',
        'iPhone 15 Pro', 'iOS 17', 'en',
        'San Francisco', 'near San Francisco', '127.0.0.1'
    ) RETURNING id INTO test_message_id;
    RAISE NOTICE '💜 Instagram message 1: %', test_message_id;

    -- Message 2: Instagram
    INSERT INTO messages (
        sender_id, receiver_id, question, answer, source,
        device_model, device_os, device_language,
        location_city, location_formatted, ip_address
    ) VALUES (
        NULL, target_user_id,
        'what do you really think about me?',
        'youre literally the coolest person i know no cap 💯',
        'instagram',
        'iPhone 14', 'iOS 16', 'en',
        'Los Angeles', 'near Los Angeles', '127.0.0.1'
    ) RETURNING id INTO test_message_id;
    RAISE NOTICE '💜 Instagram message 2: %', test_message_id;

    -- Message 3: Snapchat
    INSERT INTO messages (
        sender_id, receiver_id, question, answer, source,
        device_model, device_os, device_language,
        location_city, location_formatted, ip_address
    ) VALUES (
        NULL, target_user_id,
        'do you ever think about me?',
        'literally all the time tbh 👀',
        'snapchat',
        'Samsung Galaxy S23', 'Android 14', 'en',
        'New York', 'near New York', '127.0.0.1'
    ) RETURNING id INTO test_message_id;
    RAISE NOTICE '💛 Snapchat message 1: %', test_message_id;

    -- Message 4: Snapchat
    INSERT INTO messages (
        sender_id, receiver_id, question, answer, source,
        device_model, device_os, device_language,
        location_city, location_formatted, ip_address
    ) VALUES (
        NULL, target_user_id,
        'what do you really think about me?',
        'honestly? i think youre amazing and everyone knows it 😏',
        'snapchat',
        'Google Pixel 8', 'Android 14', 'en',
        'Chicago', 'near Chicago', '127.0.0.1'
    ) RETURNING id INTO test_message_id;
    RAISE NOTICE '💛 Snapchat message 2: %', test_message_id;

    RAISE NOTICE '';
    RAISE NOTICE '✅ All 4 messages sent with questions + answers!';
    RAISE NOTICE '📱 Go to INBOX tab and pull to refresh';
    RAISE NOTICE '';

END $$;

-- Verify messages
SELECT
    LEFT(question, 40) as question,
    LEFT(answer, 40) as answer,
    source,
    CASE WHEN read_at IS NULL THEN 'UNREAD ✅' ELSE 'READ' END as status
FROM messages
WHERE receiver_id = 'f1af9a9e-0c12-4f11-8f67-b5a19c89ccd5'
ORDER BY sent_at DESC;
