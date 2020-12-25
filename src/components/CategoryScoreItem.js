import React from 'react';

export default function CategoryScoreItem(props) {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="score-item-container">
            <h3 className="score-item-category">{props.category}</h3>
            <button className="score-item-collapse" onClick={() => setIsOpen(!isOpen)}>{isOpen? 'Collapse':'Expand'}</button>
            {isOpen && 
                <table className="score-item-table">
                    <thead>
                        <tr>
                            <th align="left">Word</th>
                            <th align="right">Term Freq.</th>
                            <th align="right">TF-IDF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.scores.map(score => {
                            return (
                                <tr>
                                    <td align="left">{score.word} </td>
                                    <td align="right">{score.tf} </td>
                                    <td align="right">{score.tfidf}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            }
        </div>
    );
}