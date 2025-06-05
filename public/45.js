(function () {
    const answerKey = {
        "001": { "answer": "2", "subject": "Physics" },
        "002": { "answer": "2", "subject": "Physics" },
        "003": { "answer": "2", "subject": "Physics" },
        "004": { "answer": "4", "subject": "Physics" },
        "005": { "answer": "2", "subject": "Physics" },
        "006": { "answer": "2", "subject": "Physics" },
        "007": { "answer": "4", "subject": "Physics" },
        "008": { "answer": "4", "subject": "Physics" },
        "009": { "answer": "1", "subject": "Physics" },
        "010": { "answer": "1", "subject": "Physics" },
        "011": { "answer": "4", "subject": "Physics" },
        "012": { "answer": "1", "subject": "Physics" },
        "013": { "answer": "3", "subject": "Physics" },
        "014": { "answer": "3", "subject": "Physics" },
        "015": { "answer": "2", "subject": "Physics" },
        "016": { "answer": "2", "subject": "Physics" },
        "017": { "answer": "4", "subject": "Physics" },
        "018": { "answer": "2", "subject": "Physics" },
        "019": { "answer": "3", "subject": "Physics" },
        "020": { "answer": "1", "subject": "Physics" },
        "021": { "answer": "4", "subject": "Physics" },
        "022": { "answer": "2", "subject": "Physics" },
        "023": { "answer": "2", "subject": "Physics" },
        "024": { "answer": "3", "subject": "Physics" },
        "025": { "answer": "3", "subject": "Physics" },
        "026": { "answer": "3", "subject": "Physics" },
        "027": { "answer": "1", "subject": "Physics" },
        "028": { "answer": "4", "subject": "Physics" },
        "029": { "answer": "2", "subject": "Physics" },
        "030": { "answer": "3", "subject": "Physics" },
        "031": { "answer": "1", "subject": "Physics" },
        "032": { "answer": "2", "subject": "Physics" },
        "033": { "answer": "3", "subject": "Physics" },
        "034": { "answer": "2", "subject": "Physics" },
        "035": { "answer": "2", "subject": "Physics" },
        "036": { "answer": "2", "subject": "Physics" },
        "037": { "answer": "3", "subject": "Physics" },
        "038": { "answer": "1", "subject": "Physics" },
        "039": { "answer": "3", "subject": "Physics" },
        "040": { "answer": "2", "subject": "Physics" },
        "041": { "answer": "2", "subject": "Physics" },
        "042": { "answer": "3", "subject": "Physics" },
        "043": { "answer": "3", "subject": "Physics" },
        "044": { "answer": "4", "subject": "Physics" },
        "045": { "answer": "2", "subject": "Physics" },
        "046": { "answer": "4", "subject": "Chemistry" },
        "047": { "answer": "2", "subject": "Chemistry" },
        "048": { "answer": "2", "subject": "Chemistry" },
        "049": { "answer": "1", "subject": "Chemistry" },
        "050": { "answer": "1", "subject": "Chemistry" },
        "051": { "answer": "3", "subject": "Chemistry" },
        "052": { "answer": "3", "subject": "Chemistry" },
        "053": { "answer": "2", "subject": "Chemistry" },
        "054": { "answer": "4", "subject": "Chemistry" },
        "055": { "answer": "1", "subject": "Chemistry" },
        "056": { "answer": "4", "subject": "Chemistry" },
        "057": { "answer": "2", "subject": "Chemistry" },
        "058": { "answer": "4", "subject": "Chemistry" },
        "059": { "answer": "4", "subject": "Chemistry" },
        "060": { "answer": "4", "subject": "Chemistry" },
        "061": { "answer": "3", "subject": "Chemistry" },
        "062": { "answer": "2", "subject": "Chemistry" },
        "063": { "answer": "1,2", "subject": "Chemistry" },
        "064": { "answer": "1", "subject": "Chemistry" },
        "065": { "answer": "1", "subject": "Chemistry" },
        "066": { "answer": "2", "subject": "Chemistry" },
        "067": { "answer": "3", "subject": "Chemistry" },
        "068": { "answer": "2", "subject": "Chemistry" },
        "069": { "answer": "2", "subject": "Chemistry" },
        "070": { "answer": "3", "subject": "Chemistry" },
        "071": { "answer": "3", "subject": "Chemistry" },
        "072": { "answer": "1", "subject": "Chemistry" },
        "073": { "answer": "3", "subject": "Chemistry" },
        "074": { "answer": "1", "subject": "Chemistry" },
        "075": { "answer": "4", "subject": "Chemistry" },
        "076": { "answer": "1", "subject": "Chemistry" },
        "077": { "answer": "1", "subject": "Chemistry" },
        "078": { "answer": "2", "subject": "Chemistry" },
        "079": { "answer": "3", "subject": "Chemistry" },
        "080": { "answer": "3", "subject": "Chemistry" },
        "081": { "answer": "2", "subject": "Chemistry" },
        "082": { "answer": "2", "subject": "Chemistry" },
        "083": { "answer": "2", "subject": "Chemistry" },
        "084": { "answer": "1", "subject": "Chemistry" },
        "085": { "answer": "1", "subject": "Chemistry" },
        "086": { "answer": "3", "subject": "Chemistry" },
        "087": { "answer": "1", "subject": "Chemistry" },
        "088": { "answer": "4", "subject": "Chemistry" },
        "089": { "answer": "1", "subject": "Chemistry" },
        "090": { "answer": "4", "subject": "Chemistry" },
        "091": { "answer": "2", "subject": "Biology" },
        "092": { "answer": "2", "subject": "Biology" },
        "093": { "answer": "1", "subject": "Biology" },
        "094": { "answer": "4", "subject": "Biology" },
        "095": { "answer": "1", "subject": "Biology" },
        "096": { "answer": "1", "subject": "Biology" },
        "097": { "answer": "1", "subject": "Biology" },
        "098": { "answer": "1", "subject": "Biology" },
        "099": { "answer": "3", "subject": "Biology" },
        "100": { "answer": "3", "subject": "Biology" },
        "101": { "answer": "4", "subject": "Biology" },
        "102": { "answer": "2", "subject": "Biology" },
        "103": { "answer": "3", "subject": "Biology" },
        "104": { "answer": "4", "subject": "Biology" },
        "105": { "answer": "4", "subject": "Biology" },
        "106": { "answer": "3", "subject": "Biology" },
        "107": { "answer": "4", "subject": "Biology" },
        "108": { "answer": "4", "subject": "Biology" },
        "109": { "answer": "2", "subject": "Biology" },
        "110": { "answer": "1", "subject": "Biology" },
        "111": { "answer": "1", "subject": "Biology" },
        "112": { "answer": "1", "subject": "Biology" },
        "113": { "answer": "2", "subject": "Biology" },
        "114": { "answer": "4", "subject": "Biology" },
        "115": { "answer": "3", "subject": "Biology" },
        "116": { "answer": "1", "subject": "Biology" },
        "117": { "answer": "3", "subject": "Biology" },
        "118": { "answer": "1", "subject": "Biology" },
        "119": { "answer": "3", "subject": "Biology" },
        "120": { "answer": "4", "subject": "Biology" },
        "121": { "answer": "4", "subject": "Biology" },
        "122": { "answer": "2", "subject": "Biology" },
        "123": { "answer": "4", "subject": "Biology" },
        "124": { "answer": "4", "subject": "Biology" },
        "125": { "answer": "2", "subject": "Biology" },
        "126": { "answer": "4", "subject": "Biology" },
        "127": { "answer": "3", "subject": "Biology" },
        "128": { "answer": "1", "subject": "Biology" },
        "129": { "answer": "2", "subject": "Biology" },
        "130": { "answer": "2", "subject": "Biology" },
        "131": { "answer": "4", "subject": "Biology" },
        "132": { "answer": "2", "subject": "Biology" },
        "133": { "answer": "2", "subject": "Biology" },
        "134": { "answer": "3", "subject": "Biology" },
        "135": { "answer": "2", "subject": "Biology" },
        "136": { "answer": "1", "subject": "Biology" },
        "137": { "answer": "3", "subject": "Biology" },
        "138": { "answer": "1", "subject": "Biology" },
        "139": { "answer": "4", "subject": "Biology" },
        "140": { "answer": "1", "subject": "Biology" },
        "141": { "answer": "1", "subject": "Biology" },
        "142": { "answer": "1", "subject": "Biology" },
        "143": { "answer": "3", "subject": "Biology" },
        "144": { "answer": "1", "subject": "Biology" },
        "145": { "answer": "3", "subject": "Biology" },
        "146": { "answer": "1", "subject": "Biology" },
        "147": { "answer": "2", "subject": "Biology" },
        "148": { "answer": "4", "subject": "Biology" },
        "149": { "answer": "3", "subject": "Biology" },
        "150": { "answer": "4", "subject": "Biology" },
        "151": { "answer": "1", "subject": "Biology" },
        "152": { "answer": "1", "subject": "Biology" },
        "153": { "answer": "1", "subject": "Biology" },
        "154": { "answer": "3", "subject": "Biology" },
        "155": { "answer": "3", "subject": "Biology" },
        "156": { "answer": "4", "subject": "Biology" },
        "157": { "answer": "2", "subject": "Biology" },
        "158": { "answer": "1", "subject": "Biology" },
        "159": { "answer": "2", "subject": "Biology" },
        "160": { "answer": "2", "subject": "Biology" },
        "161": { "answer": "2", "subject": "Biology" },
        "162": { "answer": "2", "subject": "Biology" },
        "163": { "answer": "1", "subject": "Biology" },
        "164": { "answer": "2", "subject": "Biology" },
        "165": { "answer": "2", "subject": "Biology" },
        "166": { "answer": "2", "subject": "Biology" },
        "167": { "answer": "2", "subject": "Biology" },
        "168": { "answer": "2", "subject": "Biology" },
        "169": { "answer": "4", "subject": "Biology" },
        "170": { "answer": "3", "subject": "Biology" },
        "171": { "answer": "4", "subject": "Biology" },
        "172": { "answer": "1", "subject": "Biology" },
        "173": { "answer": "1", "subject": "Biology" },
        "174": { "answer": "3", "subject": "Biology" },
        "175": { "answer": "3", "subject": "Biology" },
        "176": { "answer": "2", "subject": "Biology" },
        "177": { "answer": "2", "subject": "Biology" },
        "178": { "answer": "1", "subject": "Biology" },
        "179": { "answer": "4", "subject": "Biology" },
        "180": { "answer": "2", "subject": "Biology" }
    };

    let stats = {
        Physics: { attempted: 0, correct: 0, incorrect: 0, unattempted: 0, score: 0 },
        Chemistry: { attempted: 0, correct: 0, incorrect: 0, unattempted: 0, score: 0 },
        Biology: { attempted: 0, correct: 0, incorrect: 0, unattempted: 0, score: 0 },
        total: { attempted: 0, correct: 0, incorrect: 0, unattempted: 0, score: 0 }
    };

    const styles = `
        <style id="neet-evaluator-styles">
            .status-correct { 
                background-color: #d4edda !important; 
                color: #155724 !important;
            }
            .status-correct td {
                background-color: #d4edda !important; 
                color: #155724 !important;
            }
            .status-incorrect { 
                background-color: #f8d7da !important; 
                color: #721c24 !important;
            }
            .status-incorrect td {
                background-color: #f8d7da !important; 
                color: #721c24 !important;
            }
            .status-unattempted { 
                background-color: #fff3cd !important; 
                color: #856404 !important;
            }
            .status-unattempted td {
                background-color: #fff3cd !important; 
                color: #856404 !important;
            }
            .correct-answer {
                font-weight: bold;
                color: #28a745;
            }
            .analysis-panel {
                background: #f8f9fa;
                border: 2px solid #007bff;
                border-radius: 10px;
                margin: 20px 0;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                font-family: Arial, sans-serif;
            }
            .analysis-header {
                background: #007bff;
                color: white;
                padding: 15px 20px;
                margin: 0;
                border-radius: 8px 8px 0 0;
                font-size: 18px;
                font-weight: bold;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .analysis-content {
                padding: 20px;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 20px;
            }
            .subject-stats {
                background: white;
                border: 1px solid #ddd;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .subject-header {
                background: #f8f9fa;
                padding: 12px 15px;
                font-weight: bold;
                border-bottom: 1px solid #ddd;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .subject-details {
                padding: 15px;
            }
            .stat-row {
                display: flex;
                justify-content: space-between;
                margin-bottom: 8px;
                padding: 3px 0;
            }
            .stat-label {
                font-weight: 500;
            }
            .stat-value {
                font-weight: bold;
            }
            .correct-stat { color: #28a745; }
            .incorrect-stat { color: #dc3545; }
            .unattempted-stat { color: #ffc107; }
            .score-stat { color: #007bff; font-size: 16px; }
            .total-stats {
                grid-column: 1 / -1;
                background: #e9ecef;
                border: 2px solid #007bff;
            }
            .total-score {
                font-size: 24px;
                font-weight: bold;
                color: #007bff;
                text-align: center;
                padding: 15px;
                background: white;
                margin: 15px;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .accuracy-badge {
                display: inline-block;
                padding: 5px 12px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: bold;
                margin-left: 10px;
            }
            .accuracy-excellent { background: #d4edda; color: #155724; }
            .accuracy-good { background: #d1ecf1; color: #0c5460; }
            .accuracy-average { background: #fff3cd; color: #856404; }
            .accuracy-poor { background: #f8d7da; color: #721c24; }
        </style>
    `;

    document.head.insertAdjacentHTML('beforeend', styles);

    const table = document.getElementById('ctl00_LoginContent_grOMR');
    if (!table) {
        alert('Response table not found! Make sure you are on the Challenge Recorded OMR page.');
        return;
    }

    const headerRow = table.querySelector('tr.bg-info');
    if (headerRow) {
        const headers = headerRow.querySelectorAll('th');

        if (headers[2]) {
            headers[2].textContent = 'Recorded Response';
        }


        const correctAnswerHeader = document.createElement('th');
        correctAnswerHeader.textContent = 'Correct Answer';
        correctAnswerHeader.style.width = '120px';
        correctAnswerHeader.className = 'bg-info';

        const statusHeader = document.createElement('th');
        statusHeader.textContent = 'Status';
        statusHeader.style.width = '120px';
        statusHeader.className = 'bg-info';

        if (headers[2]) {
            headers[2].insertAdjacentElement('afterend', correctAnswerHeader);
            correctAnswerHeader.insertAdjacentElement('afterend', statusHeader);
        }
    }

    const rows = table.querySelectorAll('tr:not(.bg-info)');
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 3) {
            const questionNo = cells[1].textContent.trim(); 
            const userAnswer = cells[2].textContent.trim();

            const correctData = answerKey[questionNo];
            if (!correctData) return;

            const correctAnswer = correctData.answer;
            const subject = correctData.subject;

            let status, statusClass, score;
            if (userAnswer === '-') {
                status = 'Unattempted';
                statusClass = 'status-unattempted';
                score = 0;
                stats[subject].unattempted++;
                stats.total.unattempted++;
            } else if (correctAnswer.split(',').includes(userAnswer)) {
                status = 'Correct';
                statusClass = 'status-correct';
                score = 4;
                stats[subject].correct++;
                stats[subject].attempted++;
                stats.total.correct++;
                stats.total.attempted++;
            } else {
                status = 'Incorrect';
                statusClass = 'status-incorrect';
                score = -1;
                stats[subject].incorrect++;
                stats[subject].attempted++;
                stats.total.incorrect++;
                stats.total.attempted++;
            }

            stats[subject].score += score;
            stats.total.score += score;

            row.classList.add(statusClass);

            const statusCell = document.createElement('td');
            statusCell.textContent = status;
            statusCell.style.textAlign = 'center';
            statusCell.style.fontWeight = 'bold';

            const correctAnswerCell = document.createElement('td');
            correctAnswerCell.innerHTML = `<span class="correct-answer">${correctAnswer}</span>`;
            correctAnswerCell.style.textAlign = 'center';

            if (cells.length === 3) {
                row.appendChild(statusCell);
                row.appendChild(correctAnswerCell);
            } else {
                cells[2].insertAdjacentElement('afterend', correctAnswerCell);
                correctAnswerCell.insertAdjacentElement('afterend', statusCell);
            }
        }
    });

    const accuracy = stats.total.attempted > 0 ? ((stats.total.correct / stats.total.attempted) * 100) : 0;
    let accuracyClass = 'accuracy-poor';
    if (accuracy >= 80) accuracyClass = 'accuracy-excellent';
    else if (accuracy >= 60) accuracyClass = 'accuracy-good';
    else if (accuracy >= 40) accuracyClass = 'accuracy-average';

    const analysisPanel = document.createElement('div');
    analysisPanel.className = 'analysis-panel';
    analysisPanel.innerHTML = `
        <div class="analysis-header">
            <span>📊</span>
            <span>NEET 2025 Performance Analysis</span>
            <span class="accuracy-badge ${accuracyClass}">${accuracy.toFixed(1)}% Accuracy</span>
        </div>
        <div class="analysis-content">
            <div class="subject-stats">
                <div class="subject-header">
                    <span>🔬</span>
                    <span>Physics</span>
                </div>
                <div class="subject-details">
                    <div class="stat-row">
                        <span class="stat-label">Attempted:</span>
                        <span class="stat-value">${stats.Physics.attempted}/45</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Correct:</span>
                        <span class="stat-value correct-stat">${stats.Physics.correct}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Incorrect:</span>
                        <span class="stat-value incorrect-stat">${stats.Physics.incorrect}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Unattempted:</span>
                        <span class="stat-value unattempted-stat">${stats.Physics.unattempted}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Accuracy:</span>
                        <span class="stat-value">${stats.Physics.attempted > 0 ? ((stats.Physics.correct / stats.Physics.attempted) * 100).toFixed(1) : 0}%</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Score:</span>
                        <span class="stat-value score-stat">${stats.Physics.score}</span>
                    </div>
                </div>
            </div>
            
            <div class="subject-stats">
                <div class="subject-header">
                    <span>🧪</span>
                    <span>Chemistry</span>
                </div>
                <div class="subject-details">
                    <div class="stat-row">
                        <span class="stat-label">Attempted:</span>
                        <span class="stat-value">${stats.Chemistry.attempted}/45</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Correct:</span>
                        <span class="stat-value correct-stat">${stats.Chemistry.correct}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Incorrect:</span>
                        <span class="stat-value incorrect-stat">${stats.Chemistry.incorrect}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Unattempted:</span>
                        <span class="stat-value unattempted-stat">${stats.Chemistry.unattempted}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Accuracy:</span>
                        <span class="stat-value">${stats.Chemistry.attempted > 0 ? ((stats.Chemistry.correct / stats.Chemistry.attempted) * 100).toFixed(1) : 0}%</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Score:</span>
                        <span class="stat-value score-stat">${stats.Chemistry.score}</span>
                    </div>
                </div>
            </div>
            
            <div class="subject-stats">
                <div class="subject-header">
                    <span>🧬</span>
                    <span>Biology</span>
                </div>
                <div class="subject-details">
                    <div class="stat-row">
                        <span class="stat-label">Attempted:</span>
                        <span class="stat-value">${stats.Biology.attempted}/90</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Correct:</span>
                        <span class="stat-value correct-stat">${stats.Biology.correct}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Incorrect:</span>
                        <span class="stat-value incorrect-stat">${stats.Biology.incorrect}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Unattempted:</span>
                        <span class="stat-value unattempted-stat">${stats.Biology.unattempted}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Accuracy:</span>
                        <span class="stat-value">${stats.Biology.attempted > 0 ? ((stats.Biology.correct / stats.Biology.attempted) * 100).toFixed(1) : 0}%</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Score:</span>
                        <span class="stat-value score-stat">${stats.Biology.score}</span>
                    </div>
                </div>
            </div>
            
            <div class="subject-stats total-stats">
                <div class="subject-header">
                    <span>📈</span>
                    <span>Overall Performance</span>
                </div>
                <div class="subject-details">
                    <div class="stat-row">
                        <span class="stat-label">Total Attempted:</span>
                        <span class="stat-value">${stats.total.attempted}/180</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Total Correct:</span>
                        <span class="stat-value correct-stat">${stats.total.correct}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Total Incorrect:</span>
                        <span class="stat-value incorrect-stat">${stats.total.incorrect}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Total Unattempted:</span>
                        <span class="stat-value unattempted-stat">${stats.total.unattempted}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Total Accuracy:</span>
                        <span class="stat-value">${stats.total.attempted > 0 ? ((stats.total.correct / stats.total.attempted) * 100).toFixed(1) : 0}%</span>
                    </div>
                </div>
                <div class="total-score">
                    🎯 Total Score: ${stats.total.score}/720
                </div>
            </div>
        </div>
    `;

    const recordedResponseHeader = document.querySelector('#ctl00_LoginContent_pnl_Entry h4');
    if (recordedResponseHeader) {
        recordedResponseHeader.insertAdjacentElement('beforebegin', analysisPanel);
    }

    console.log('✅ Enhanced NEET Response Evaluator loaded successfully!');
    console.log('📊 Stats:', stats);

    console.log(`
    📈 PERFORMANCE SUMMARY:
    Physics: ${stats.Physics.correct}C + ${stats.Physics.incorrect}W + ${stats.Physics.unattempted}U = ${stats.Physics.score} marks
    Chemistry: ${stats.Chemistry.correct}C + ${stats.Chemistry.incorrect}W + ${stats.Chemistry.unattempted}U = ${stats.Chemistry.score} marks
    Biology: ${stats.Biology.correct}C + ${stats.Biology.incorrect}W + ${stats.Biology.unattempted}U = ${stats.Biology.score} marks
    
    🎯 TOTAL SCORE: ${stats.total.score}/720
    ✅ Accuracy: ${accuracy.toFixed(1)}%
    📊 Completion: ${((stats.total.attempted / 180) * 100).toFixed(1)}%
    `);

})();