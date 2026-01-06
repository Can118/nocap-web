-- Migration: Add question_id to feedbacks table
-- This links each feedback/rating to a specific question

-- Add question_id column to feedbacks table
ALTER TABLE public.feedbacks
ADD COLUMN IF NOT EXISTS question_id BIGINT REFERENCES public.questions(id) ON DELETE CASCADE;

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_feedbacks_question_id ON public.feedbacks(question_id);

-- Create composite index for common query pattern (get stats for a question)
CREATE INDEX IF NOT EXISTS idx_feedbacks_question_stats ON public.feedbacks(question_id, rating_value);
