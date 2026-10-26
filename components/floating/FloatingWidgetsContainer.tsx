'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import StudyStopwatchWidget from '@/components/StudyStopwatchWidget';
import TranslateFloatingWidget from '@/components/TranslateFloatingWidget';
import EnglishNotesFloatingWidget from '@/components/EnglishNotesFloatingWidget';
import VocabFloatingWidget from '@/components/VocabFloatingWidget';
import TodoFloatingWidget from '@/components/TodoFloatingWidget';

interface SafeWidgetBoundaryProps {
  name: string;
  children: ReactNode;
}

interface SafeWidgetBoundaryState {
  hasError: boolean;
}

export class SafeWidgetBoundary extends Component<
  SafeWidgetBoundaryProps,
  SafeWidgetBoundaryState
> {
  constructor(props: SafeWidgetBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): SafeWidgetBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn(`[FloatingWidget] Captured error in ${this.props.name}:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

export default function FloatingWidgetsContainer() {
  return (
    <>
      <SafeWidgetBoundary name="StudyStopwatchWidget">
        <StudyStopwatchWidget />
      </SafeWidgetBoundary>
      <SafeWidgetBoundary name="TranslateFloatingWidget">
        <TranslateFloatingWidget />
      </SafeWidgetBoundary>
      <SafeWidgetBoundary name="EnglishNotesFloatingWidget">
        <EnglishNotesFloatingWidget />
      </SafeWidgetBoundary>
      <SafeWidgetBoundary name="VocabFloatingWidget">
        <VocabFloatingWidget />
      </SafeWidgetBoundary>
      <SafeWidgetBoundary name="TodoFloatingWidget">
        <TodoFloatingWidget />
      </SafeWidgetBoundary>
    </>
  );
}
