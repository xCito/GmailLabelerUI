import CategoryScoreItem from './CategoryScoreItem';

export default function ClassificationScorePane() {
    let shippingScores = [
        {word: 'tracking', tf: 15, tfidf: 0.992823},
        {word: 'number', tf: 7, tfidf: 0.832},
        {word: 'order', tf: 10, tfidf: 0.345},
        {word: 'tracking', tf: 15, tfidf: 0.992823},
        {word: 'number', tf: 7, tfidf: 0.832},
        {word: 'order', tf: 10, tfidf: 0.345}
    ];
    let financeScores = [
        {word: 'withdrawl', tf: 15, tfidf: 0.992823},
        {word: 'deposit', tf: 7, tfidf: 0.832},
        {word: 'withdrawl', tf: 15, tfidf: 0.992823},
        {word: 'deposit', tf: 7, tfidf: 0.832},
        {word: 'withdrawl', tf: 15, tfidf: 0.992823},
        {word: 'deposit', tf: 7, tfidf: 0.832},
        {word: 'withdrawl', tf: 15, tfidf: 0.992823},
        {word: 'deposit', tf: 7, tfidf: 0.832},
        {word: 'account', tf: 10, tfidf: 0.345}
    ];
    let schoolScores = [
        {word: 'education', tf: 15, tfidf: 0.992823},
        {word: 'cuny', tf: 7, tfidf: 0.832},
        {word: 'homework', tf: 7, tfidf: 0.832},
        {word: 'edu', tf: 10, tfidf: 0.345}
    ];
    return (
        <div className='pane-container'>
            <h2 className="pane-header">Scores</h2>
            <div className="pane-body">
                <CategoryScoreItem category="Shipping" scores={shippingScores}/>
                <CategoryScoreItem category="Finance" scores={financeScores}/>
                <CategoryScoreItem category="School" scores={schoolScores}/>
            </div>
            <div className="pane-footer"></div>
        </div>
    );
}