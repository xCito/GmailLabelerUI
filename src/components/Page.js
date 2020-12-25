import React from 'react';
import { SplitPane } from 'react-multi-split-pane';
import EmailPane from './EmailPane';
import CategoryPane from './CategoryPane';
import ClassificationScorePane from './ClassificationScorePane';



export default function Page() {
    
    return (
        <SplitPane split="vertical" minSize={400} className="split-pane-max-height">
            <EmailPane />
            <CategoryPane />
            <ClassificationScorePane />
        </SplitPane>
    );
} 

