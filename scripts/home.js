document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // 双行标题交替飞入飞出
    // Line1 "Insula" 先行，line2 "Fantasia" 延迟半个周期 (2s)
    // ==========================================
    var lines = [
        { el: document.getElementById('titleLine1'), text: 'Insula' },
        { el: document.getElementById('titleLine2'), text: 'Fantasia' }
    ];

    lines.forEach(function (line) {
        line.el.innerHTML = '';
        line.text.split('').forEach(function (char, i) {
            var span = document.createElement('span');
            span.className = 'char';
            span.style.setProperty('--i', i);
            span.textContent = char;
            line.el.appendChild(span);
        });
    });
});