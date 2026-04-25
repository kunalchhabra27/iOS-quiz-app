'use client';

import { useMemo, useState } from 'react';
import { topics } from '@/data/questions';

export default function Home() {
  const [topicId, setTopicId] = useState<string>(topics[0].id);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [scoreByTopic, setScoreByTopic] = useState<Record<string, number>>({});

  const activeTopic = useMemo(
    () => topics.find((topic) => topic.id === topicId) ?? topics[0],
    [topicId]
  );

  const currentQuestion = activeTopic.questions[questionIndex];
  const isLastQuestion = questionIndex === activeTopic.questions.length - 1;
  const hasAnswered = selectedOption !== null;

  const startTopic = (id: string) => {
    setTopicId(id);
    setQuestionIndex(0);
    setSelectedOption(null);
  };

  const handleSelect = (optionIndex: number) => {
    if (hasAnswered) return;

    setSelectedOption(optionIndex);
    if (optionIndex === currentQuestion.answerIndex) {
      setScoreByTopic((prev) => ({
        ...prev,
        [activeTopic.id]: (prev[activeTopic.id] ?? 0) + 1
      }));
    }
  };

  const nextQuestion = () => {
    if (!hasAnswered) return;
    if (!isLastQuestion) {
      setQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
    }
  };

  const restartTopic = () => {
    setQuestionIndex(0);
    setSelectedOption(null);
    setScoreByTopic((prev) => ({ ...prev, [activeTopic.id]: 0 }));
  };

  return (
    <main className="quiz-app">
      <section className="hero">
        <h1>Neon iOS Quiz Lab</h1>
        <p>
          7 advanced iOS learning tracks with <strong>10 MCQs each</strong>: Swift, SwiftUI,
          Combine, Xcode, MVVM + Clean Architecture, Testing, and SwiftData.
        </p>
      </section>

      <section className="topic-grid" aria-label="Topic selection">
        {topics.map((topic) => (
          <button
            type="button"
            key={topic.id}
            className={`topic-tile ${topic.id === activeTopic.id ? 'active' : ''}`}
            onClick={() => startTopic(topic.id)}
          >
            <span>{topic.title}</span>
            <small>{scoreByTopic[topic.id] ?? 0}/10 scored</small>
          </button>
        ))}
      </section>

      <section className="quiz-panel">
        <header>
          <h2>{activeTopic.title}</h2>
          <p>
            Question {questionIndex + 1} of {activeTopic.questions.length}
          </p>
        </header>

        <article>
          <h3>{currentQuestion.prompt}</h3>
          <div className="options" role="list">
            {currentQuestion.options.map((option, index) => {
              const isCorrect = index === currentQuestion.answerIndex;
              const isSelected = selectedOption === index;
              const className = !hasAnswered
                ? 'option'
                : isCorrect
                  ? 'option correct'
                  : isSelected
                    ? 'option wrong'
                    : 'option muted';

              return (
                <button
                  type="button"
                  key={option}
                  className={className}
                  onClick={() => handleSelect(index)}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <div className="feedback">
            {hasAnswered ? (
              <>
                <p>
                  {selectedOption === currentQuestion.answerIndex
                    ? 'Correct!'
                    : 'Not quite this time.'}
                </p>
                <small>{currentQuestion.explanation}</small>
              </>
            ) : (
              <small>Select an option to reveal feedback.</small>
            )}
          </div>
        </article>

        <footer>
          <button type="button" onClick={restartTopic} className="ghost">
            Restart Topic
          </button>
          <button
            type="button"
            onClick={nextQuestion}
            className="primary"
            disabled={!hasAnswered || isLastQuestion}
          >
            {isLastQuestion ? 'Topic Complete' : 'Next Question'}
          </button>
        </footer>
      </section>
    </main>
  );
}
