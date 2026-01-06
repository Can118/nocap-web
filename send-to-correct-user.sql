-- ================================================================
-- SEND TEST MESSAGES TO THE CORRECT USER
-- ================================================================
-- User ID from app: 41e3af5d-cb27-415c-94c5-597daf937bf1
-- ================================================================

DO $$
DECLARE
    target_user_id UUID := '41e3af5d-cb27-415c-94c5-597daf937bf1';
    test_message_id UUID;
BEGIN
    RAISE NOTICE '📧 Sending test messages to user: %', target_user_id;
    RAISE NOTICE '';

    -- Instagram Message 1
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

    -- Instagram Message 2
    INSERT INTO messages (
        sender_id, receiver_id, question, source,
        device_model, device_os, device_language,
        location_city, location_formatted, ip_address
    ) VALUES (
        NULL, target_user_id,
        'no cap you are always on my mind 💭',
        'instagram',
        'iPhone 14', 'iOS 16', 'en',
        'Los Angeles', 'near Los Angeles', '127.0.0.1'
    ) RETURNING id INTO test_message_id;
    RAISE NOTICE '💜 Instagram message 2: %', test_message_id;

    -- Snapchat Message 1
    INSERT INTO messages (
        sender_id, receiver_id, question, source,
        device_model, device_os, device_language,
        location_city, location_formatted, ip_address
    ) VALUES (
        NULL, target_user_id,
        'bet you cant guess who this is 😏',
        'snapchat',
        'Samsung Galaxy S23', 'Android 14', 'en',
        'New York', 'near New York', '127.0.0.1'
    ) RETURNING id INTO test_message_id;
    RAISE NOTICE '💛 Snapchat message 1: %', test_message_id;

    -- Snapchat Message 2
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
    RAISE NOTICE '✅ All 4 messages sent!';
    RAISE NOTICE '📱 Pull down to refresh in the app';
    RAISE NOTICE '';

END $$;

-- Verify messages
SELECT
    LEFT(question, 50) as message,
    source,
    CASE WHEN read_at IS NULL THEN 'UNREAD ✅' ELSE 'READ' END as status
FROM messages
WHERE receiver_id = '41e3af5d-cb27-415c-94c5-597daf937bf1'
ORDER BY sent_at DESC;
