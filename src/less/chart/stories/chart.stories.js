export default { title: 'Chart' };
export const stacked = () => `
<div aria-label="chart title" class="chart">
    <div tabindex="0" class="donut-graph chart__container">
        <svg width="190" height="190" viewBox="0 0 190 190" role="graphics-document">
            <desc>This donut chart is displaying a selection of sample values</desc>
            <defs>
                <pattern patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" width="3" height="5" x="0"
                    y="0" id="dataVizPattern0">
                    <rect x="0" y="0" width="3" height="5" fill="var(--color-data-viz-chart-quaternary-background)">
                    </rect>
                    <path d="M0 0 L3 0" stroke="var(--color-data-viz-chart-quaternary-stroke)" stroke-width="2"
                        fill="none"></path>
                </pattern>
                <pattern patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" width="4.5" height="3" x="0"
                    y="0" patternTransform="rotate(-60 50 50)" id="dataVizPattern1">
                    <rect x="0" y="0" width="4.5" height="3" fill="var(--color-data-viz-chart-tertiary-background)">
                    </rect>
                    <path d="M0 0 L0 3" stroke="var(--color-data-viz-chart-tertiary-stroke)" stroke-width="2"
                        fill="none"></path>
                </pattern>
            </defs>
            <path class="donut-graph__segment donut-graph__segment--primary"
                d="M 95 11.299999999999997 A 83.7 83.7 0 1 1 57.784035502221556 169.97107433203885 Q 56.74090350518728 169.44415044448158 55.67815082477582 171.51204351238385 L 53.5526454639529 175.6478296481884 Q 52.48989278354143 177.71572271609065 53.648928335801735 178.30119370226538 A 93 93 0 1 0 95 2 Q 93.70151722845951 2.0090652671347016 93.73397929774802 4.333838635456345 L 93.79890343632505 8.98338537209959 Q 93.83136550561356 11.308158740421234 95 11.299999999999997"
                role="graphics-symbol" tabindex="-1"
                aria-labelledby="ebay-chart-c10-chart-legend-label-0"></path>
            <path class="donut-graph__segment donut-graph__segment--secondary"
                d="M 47.712261813332695 164.06199980589332 A 83.7 83.7 0 0 1 83.35121144964256 12.114562646330555 Q 84.50960835066778 11.959999499978196 84.21820858263077 9.653332819422033 L 83.63540904655676 5.0399994583097225 Q 83.34400927851975 2.73333277775356 82.05690161071396 2.9050696070339512 A 93 93 0 0 0 42.458068681480775 171.73555533988144 Q 43.534585920368976 172.46167538603925 44.82122127235976 170.52513350138827 L 47.3944919763413 166.6520497320863 Q 48.68112732833208 164.71550784743533 47.712261813332695 164.06199980589332"
                role="graphics-symbol" tabindex="-1"
                aria-labelledby="ebay-chart-c10-chart-legend-label-1"></path>
        </svg></div>
    <div class="chart-legend__container chart-legend__container-vertical">
        <div class="chart-legend">
            <dl>
                <div id="ebay-chart-c10-chart-legend-label-0" 
                    class="chart-legend__item chart-legend__item--primary">
                    <dt>Value 1</dt>
                    <dd class="value">$ 3<span class="clipped">60.00%</span></dd>
                </div>
                <div id="ebay-chart-c10-chart-legend-label-1" 
                    class="chart-legend__item chart-legend__item--secondary">
                    <dt>Value 2</dt>
                    <dd class="value">$ 2<span class="clipped">40.00%</span></dd>
                </div>
            </dl>
        </div>
    </div>
</div>
`;

export const composition = () => `
<div aria-label="chart title" class="chart chart--composition">
    <div class="chart__metrics">
        <span class="chart__metric">$178 total</span>
        <span class="chart__subtitle">return rate</span>
    </div>
    <div tabindex="0" class="donut-graph chart__container chart__container-composition">
        <svg width="120" height="120" viewBox="0 0 120 120" role="graphics-document">
            <desc>This donut chart is displaying a selection of sample values</desc>
            <defs>
                <pattern patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" width="3" height="5" x="0"
                    y="0" id="dataVizPattern0">
                    <rect x="0" y="0" width="3" height="5" fill="var(--color-data-viz-chart-quaternary-background)">
                    </rect>
                    <path d="M0 0 L3 0" stroke="var(--color-data-viz-chart-quaternary-stroke)" stroke-width="2"
                        fill="none"></path>
                </pattern>
                <pattern patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" width="4.5" height="3" x="0"
                    y="0" patternTransform="rotate(-60 50 50)" id="dataVizPattern1">
                    <rect x="0" y="0" width="4.5" height="3" fill="var(--color-data-viz-chart-tertiary-background)">
                    </rect>
                    <path d="M0 0 L0 3" stroke="var(--color-data-viz-chart-tertiary-stroke)" stroke-width="2"
                        fill="none"></path>
                </pattern>
            </defs>
            <path class="donut-graph__segment donut-graph__segment--primary"
                d="M 60 10 A 50 50 0 0 1 109.99990385768143 59.90194785767824 Q 109.99639908921193 60.60006509000882 111.99625505278041 60.62406769360918 L 115.99596697991737 60.67207290080988 Q 117.99582294348585 60.69607550441023 117.99988847491045 59.886259514906754 A 58 58 0 0 0 60 2 Q 59.19019354032959 2.005653607460353 59.21811790100788 4.005458655478961 L 59.27396662236446 8.005068751516177 Q 59.30189098304275 10.004873799534785 60 10"
                role="graphics-symbol" tabindex="-1"
                aria-labelledby="ebay-chart-c3-chart-legend-label-0"></path>
            <path class="donut-graph__segment donut-graph__segment--tertiary"
                d="M 109.52695445111308 66.86154376196572 A 50 50 0 0 1 65.75270162826193 109.667961745739 Q 65.05866783899978 109.74344056953308 65.26101455255977 111.7331781923144 L 65.66570797967975 115.71265343787704 Q 65.86805469323974 117.70239106065837 66.67313388878384 117.61483562505724 A 58 58 0 0 0 117.45126716329116 67.95939076388024 Q 117.55679749334271 67.1564699615339 115.57208033839987 66.9096951352741 L 111.60264602851416 66.41614548275453 Q 109.61792887357132 66.16937065649475 109.52695445111308 66.86154376196572"
                role="graphics-symbol" tabindex="-1"
                aria-labelledby="ebay-chart-c3-chart-legend-label-1"></path>
            <path class="donut-graph__segment donut-graph__segment--secondary"
                d="M 58.784272476945034 109.98521788078638 A 50 50 0 0 1 14.94062263819081 81.67146768832416 Q 14.64243390556095 81.04022808784622 12.82813126178339 81.88183721136008 L 9.199525974228266 83.56505545838777 Q 7.3852233304507 84.40666458190162 7.7311222603013405 85.13890251845602 A 58 58 0 0 0 58.58975607325624 117.98285274171221 Q 59.399460584737994 117.99689088572522 59.42016884043669 115.99699809656228 L 59.46158535183407 111.99721251823641 Q 59.48229360753275 109.99731972907347 58.784272476945034 109.98521788078638"
                role="graphics-symbol" tabindex="-1"
                aria-labelledby="ebay-chart-c3-chart-legend-label-2"></path>
            <path class="donut-graph__segment donut-graph__segment--quaternary"
                d="M 12.363052040683655 75.18950917973936 A 50 50 0 0 1 18.768714795662916 31.716062501861344 Q 19.167639292085994 31.143140867052068 17.534344863769434 29.98886650173415 L 14.267756007136313 27.680317771098316 Q 12.634461578819753 26.5260434057804 12.171709162968988 27.19063250215916 A 58 58 0 0 0 4.74114036719304 77.61983064849765 Q 4.992538032339986 78.38964730157807 6.889347065707575 77.75552153255813 L 10.682965132442746 76.48726999451827 Q 12.579774165810335 75.85314422549834 12.363052040683655 75.18950917973936"
                role="graphics-symbol" tabindex="-1"
                aria-labelledby="ebay-chart-c3-chart-legend-label-3"></path>
            <path class="donut-graph__segment donut-graph__segment--quinary"
                d="M 23.10633811794486 26.253034018854507 A 50 50 0 0 1 53.041344951996756 10.486596562921484 Q 53.733338321784814 10.394264934276109 53.4826718546562 8.410035531647154 L 52.98133892039899 4.441576726389236 Q 52.73067245327039 2.457347323760281 51.92796014431623 2.564452012988916 A 58 58 0 0 0 17.203352216816036 20.85351946187123 Q 16.660953641540964 21.45486981810363 18.155403515970583 22.78401223816902 L 21.14430326482983 25.44229707829981 Q 22.63875313925945 26.771439498365197 23.10633811794486 26.253034018854507"
                role="graphics-symbol" tabindex="-1"
                aria-labelledby="ebay-chart-c3-chart-legend-label-4"></path>
        </svg></div>
    <div class="chart-legend__container chart-legend__container-vertical">
        <div class="chart-legend">
            <dl>
                <div id="ebay-chart-c3-chart-legend-label-0" 
                    class="chart-legend__item chart-legend__item--primary">
                    <dt>Value 1</dt>
                    <dd class="value">$ 50<span class="clipped">28.09%</span></dd>
                </div>
                <div id="ebay-chart-c3-chart-legend-label-1" 
                    class="chart-legend__item chart-legend__item--tertiary">
                    <dt>Value 2</dt>
                    <dd class="value">$ 42<span class="clipped">23.60%</span></dd>
                </div>
                <div id="ebay-chart-c3-chart-legend-label-2" 
                    class="chart-legend__item chart-legend__item--secondary">
                    <dt>Value 3</dt>
                    <dd class="value">$ 35<span class="clipped">19.66%</span></dd>
                </div>
                <div id="ebay-chart-c3-chart-legend-label-3" 
                    class="chart-legend__item chart-legend__item--quaternary">
                    <dt>Value 1</dt>
                    <dd class="value">$ 29<span class="clipped">16.29%</span></dd>
                </div>
                <div id="ebay-chart-c3-chart-legend-label-4" 
                    class="chart-legend__item chart-legend__item--quinary">
                    <dt>Value 2</dt>
                    <dd class="value">$ 22<span class="clipped">12.36%</span></dd>
                </div>
            </dl>
        </div>
    </div>
</div>
`;

export const legendOnRight = () => `
<div aria-label="chart title" class="chart chart--horizontal chart--right">
    <div tabindex="0" class="donut-graph chart__container chart__container-horizontal chart__container-right">
        <svg width="190" height="190" viewBox="0 0 190 190" role="graphics-document">
            <desc>This donut chart is displaying a selection of sample values</desc>
            <defs>
                <pattern patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" width="3" height="5" x="0"
                    y="0" id="dataVizPattern0">
                    <rect x="0" y="0" width="3" height="5" fill="var(--color-data-viz-chart-quaternary-background)">
                    </rect>
                    <path d="M0 0 L3 0" stroke="var(--color-data-viz-chart-quaternary-stroke)" stroke-width="2"
                        fill="none"></path>
                </pattern>
                <pattern patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" width="4.5" height="3" x="0"
                    y="0" patternTransform="rotate(-60 50 50)" id="dataVizPattern1">
                    <rect x="0" y="0" width="4.5" height="3" fill="var(--color-data-viz-chart-tertiary-background)">
                    </rect>
                    <path d="M0 0 L0 3" stroke="var(--color-data-viz-chart-tertiary-stroke)" stroke-width="2"
                        fill="none"></path>
                </pattern>
            </defs>
            <path class="donut-graph__segment donut-graph__segment--primary"
                d="M 95 11.299999999999997 A 83.7 83.7 0 0 1 178.6998390577587 94.83586071375336 Q 178.6939720753408 96.00450896067477 181.01880463298914 96.03241198736018 L 185.66846974828584 96.088218040731 Q 187.9933023059342 96.1161210674164 187.99982117528745 94.81762301528151 A 93 93 0 0 0 95 2 Q 93.70151722845951 2.0090652671347016 93.73397929774802 4.333838635456345 L 93.79890343632505 8.98338537209959 Q 93.83136550561356 11.308158740421234 95 11.299999999999997"
                role="graphics-symbol" tabindex="-1"
                aria-labelledby="ebay-chart-c9-chart-legend-label-0"></path>
            <path class="donut-graph__segment donut-graph__segment--tertiary"
                d="M 177.9081217511633 106.48622425753061 A 83.7 83.7 0 0 1 104.63002252571047 178.14416796236708 Q 103.46820996248563 178.27051951339837 103.70343801699912 180.58358949988167 L 104.1738941260261 185.2097294728482 Q 104.40912218053958 187.5227994593315 105.7000250285672 187.38240884707454 A 93 93 0 0 0 187.12013527907033 107.76247139725623 Q 187.28934770484264 106.47502942108022 184.9821140122216 106.18815368555322 L 180.36764662697945 105.61440221449921 Q 178.0604129343584 105.3275264789722 177.9081217511633 106.48622425753061"
                role="graphics-symbol" tabindex="-1"
                aria-labelledby="ebay-chart-c9-chart-legend-label-1"></path>
            <path class="donut-graph__segment donut-graph__segment--secondary"
                d="M 92.96487212640598 178.6752547324364 A 83.7 83.7 0 0 1 19.570602296331415 131.27803691025463 Q 19.071434357909027 130.22134181905457 16.962307534517606 131.1997124251394 L 12.744053887734779 133.1564536373091 Q 10.634927064343373 134.13482424339398 11.189558107034912 135.30892990028292 A 93 93 0 0 0 92.73874680711776 187.9725052582627 Q 94.03706611001093 187.99501469607662 94.06113945726065 185.67013932867474 L 94.1092861517601 181.0203885938709 Q 94.13335949900983 178.69551322646896 92.96487212640598 178.6752547324364"
                role="graphics-symbol" tabindex="-1"
                aria-labelledby="ebay-chart-c9-chart-legend-label-2"></path>
            <path class="donut-graph__segment donut-graph__segment--quaternary"
                d="M 15.25574911610444 120.42723836688369 A 83.7 83.7 0 0 1 25.97882856793973 47.65268862811589 Q 26.646628174951957 46.69361781144516 24.747923402033948 45.35177386176308 L 20.950513856197958 42.668085962398926 Q 19.05180908327995 41.32624201271685 18.309809519933026 42.3918762534621 A 93 93 0 0 0 6.395276795671606 123.2524870743152 Q 6.7983799484072165 124.48684825942689 9.003420449697046 123.74967705294122 L 13.413501452276677 122.27533463996988 Q 15.618541953566492 121.53816343348421 15.25574911610444 120.42723836688369"
                role="graphics-symbol" tabindex="-1"
                aria-labelledby="ebay-chart-c9-chart-legend-label-3"></path>
            <path class="donut-graph__segment donut-graph__segment--quinary"
                d="M 33.24001000943969 38.50757894756244 A 83.7 83.7 0 0 1 83.35121144964256 12.114562646330555 Q 84.50960835066778 11.959999499978196 84.21820858263077 9.653332819422033 L 83.63540904655676 5.0399994583097225 Q 83.34400927851975 2.73333277775356 82.05690161071396 2.9050696070339512 A 93 93 0 0 0 26.377788899377435 32.23064327506938 Q 25.508080839022583 33.19487746695927 27.245378818047016 34.74000553028529 L 30.71997477609588 37.83026165693732 Q 32.45727275512032 39.37538972026334 33.24001000943969 38.50757894756244"
                role="graphics-symbol" tabindex="-1"
                aria-labelledby="ebay-chart-c9-chart-legend-label-4"></path>
        </svg></div>
    <div class="chart-legend__container chart-legend__container-horizontal">
        <div class="chart__metrics-horizontal"><span class="chart__metric">$178 total</span><span
                class="chart__subtitle">return rate</span></div>
        <div class="chart-legend">
            <dl>
                <div id="ebay-chart-c9-chart-legend-label-0" 
                    class="chart-legend__item chart-legend__item--primary">
                    <dt>Value 1</dt>
                    <dd class="value">$ 50<span class="clipped">28.09%</span></dd>
                </div>
                <div id="ebay-chart-c9-chart-legend-label-1" 
                    class="chart-legend__item chart-legend__item--tertiary">
                    <dt>Value 2</dt>
                    <dd class="value">$ 42<span class="clipped">23.60%</span></dd>
                </div>
                <div id="ebay-chart-c9-chart-legend-label-2" 
                    class="chart-legend__item chart-legend__item--secondary">
                    <dt>Value 3</dt>
                    <dd class="value">$ 35<span class="clipped">19.66%</span></dd>
                </div>
                <div id="ebay-chart-c9-chart-legend-label-3" 
                    class="chart-legend__item chart-legend__item--quaternary">
                    <dt>Value 1</dt>
                    <dd class="value">$ 29<span class="clipped">16.29%</span></dd>
                </div>
                <div id="ebay-chart-c9-chart-legend-label-4" 
                    class="chart-legend__item chart-legend__item--quinary">
                    <dt>Value 2</dt>
                    <dd class="value">$ 22<span class="clipped">12.36%</span></dd>
                </div>
            </dl>
        </div>
    </div>
</div>
`;

export const legendOnLeft = () => `
<div aria-label="chart title" class="chart chart--horizontal chart--left">
    <div  tabindex="0" class="donut-graph chart__container chart__container-horizontal chart__container-left">
        <svg width="190" height="190" viewBox="0 0 190 190" role="graphics-document">
            <desc>This donut chart is displaying a selection of sample values</desc>
            <defs>
                <pattern patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" width="3" height="5" x="0"
                    y="0" id="dataVizPattern0">
                    <rect x="0" y="0" width="3" height="5" fill="var(--color-data-viz-chart-quaternary-background)">
                    </rect>
                    <path d="M0 0 L3 0" stroke="var(--color-data-viz-chart-quaternary-stroke)" stroke-width="2"
                        fill="none"></path>
                </pattern>
                <pattern patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" width="4.5" height="3" x="0"
                    y="0" patternTransform="rotate(-60 50 50)" id="dataVizPattern1">
                    <rect x="0" y="0" width="4.5" height="3" fill="var(--color-data-viz-chart-tertiary-background)">
                    </rect>
                    <path d="M0 0 L0 3" stroke="var(--color-data-viz-chart-tertiary-stroke)" stroke-width="2"
                        fill="none"></path>
                </pattern>
            </defs>
            <path class="donut-graph__segment donut-graph__segment--primary"
                d="M 95 11.299999999999997 A 83.7 83.7 0 0 1 178.6998390577587 94.83586071375336 Q 178.6939720753408 96.00450896067477 181.01880463298914 96.03241198736018 L 185.66846974828584 96.088218040731 Q 187.9933023059342 96.1161210674164 187.99982117528745 94.81762301528151 A 93 93 0 0 0 95 2 Q 93.70151722845951 2.0090652671347016 93.73397929774802 4.333838635456345 L 93.79890343632505 8.98338537209959 Q 93.83136550561356 11.308158740421234 95 11.299999999999997"
                role="graphics-symbol" tabindex="-1"
                aria-labelledby="ebay-chart-c8-chart-legend-label-0"></path>
            <path class="donut-graph__segment donut-graph__segment--tertiary"
                d="M 177.9081217511633 106.48622425753061 A 83.7 83.7 0 0 1 104.63002252571047 178.14416796236708 Q 103.46820996248563 178.27051951339837 103.70343801699912 180.58358949988167 L 104.1738941260261 185.2097294728482 Q 104.40912218053958 187.5227994593315 105.7000250285672 187.38240884707454 A 93 93 0 0 0 187.12013527907033 107.76247139725623 Q 187.28934770484264 106.47502942108022 184.9821140122216 106.18815368555322 L 180.36764662697945 105.61440221449921 Q 178.0604129343584 105.3275264789722 177.9081217511633 106.48622425753061"
                role="graphics-symbol" tabindex="-1"
                aria-labelledby="ebay-chart-c8-chart-legend-label-1"></path>
            <path class="donut-graph__segment donut-graph__segment--secondary"
                d="M 92.96487212640598 178.6752547324364 A 83.7 83.7 0 0 1 19.570602296331415 131.27803691025463 Q 19.071434357909027 130.22134181905457 16.962307534517606 131.1997124251394 L 12.744053887734779 133.1564536373091 Q 10.634927064343373 134.13482424339398 11.189558107034912 135.30892990028292 A 93 93 0 0 0 92.73874680711776 187.9725052582627 Q 94.03706611001093 187.99501469607662 94.06113945726065 185.67013932867474 L 94.1092861517601 181.0203885938709 Q 94.13335949900983 178.69551322646896 92.96487212640598 178.6752547324364"
                role="graphics-symbol" tabindex="-1"
                aria-labelledby="ebay-chart-c8-chart-legend-label-2"></path>
            <path class="donut-graph__segment donut-graph__segment--quaternary"
                d="M 15.25574911610444 120.42723836688369 A 83.7 83.7 0 0 1 25.97882856793973 47.65268862811589 Q 26.646628174951957 46.69361781144516 24.747923402033948 45.35177386176308 L 20.950513856197958 42.668085962398926 Q 19.05180908327995 41.32624201271685 18.309809519933026 42.3918762534621 A 93 93 0 0 0 6.395276795671606 123.2524870743152 Q 6.7983799484072165 124.48684825942689 9.003420449697046 123.74967705294122 L 13.413501452276677 122.27533463996988 Q 15.618541953566492 121.53816343348421 15.25574911610444 120.42723836688369"
                role="graphics-symbol" tabindex="-1"
                aria-labelledby="ebay-chart-c8-chart-legend-label-3"></path>
            <path class="donut-graph__segment donut-graph__segment--quinary"
                d="M 33.24001000943969 38.50757894756244 A 83.7 83.7 0 0 1 83.35121144964256 12.114562646330555 Q 84.50960835066778 11.959999499978196 84.21820858263077 9.653332819422033 L 83.63540904655676 5.0399994583097225 Q 83.34400927851975 2.73333277775356 82.05690161071396 2.9050696070339512 A 93 93 0 0 0 26.377788899377435 32.23064327506938 Q 25.508080839022583 33.19487746695927 27.245378818047016 34.74000553028529 L 30.71997477609588 37.83026165693732 Q 32.45727275512032 39.37538972026334 33.24001000943969 38.50757894756244"
                role="graphics-symbol" tabindex="-1"
                aria-labelledby="ebay-chart-c8-chart-legend-label-4"></path>
        </svg></div>
    <div class="chart-legend__container chart-legend__container-horizontal">
        <div class="chart__metrics-horizontal"><span class="chart__metric">$178 total</span><span
                class="chart__subtitle">return rate</span></div>
        <div class="chart-legend">
            <dl>
                <div id="ebay-chart-c8-chart-legend-label-0" 
                    class="chart-legend__item chart-legend__item--primary">
                    <dt>Value 1</dt>
                    <dd class="value">$ 50<span class="clipped">28.09%</span></dd>
                </div>
                <div id="ebay-chart-c8-chart-legend-label-1" 
                    class="chart-legend__item chart-legend__item--tertiary">
                    <dt>Value 2</dt>
                    <dd class="value">$ 42<span class="clipped">23.60%</span></dd>
                </div>
                <div id="ebay-chart-c8-chart-legend-label-2" 
                    class="chart-legend__item chart-legend__item--secondary">
                    <dt>Value 3</dt>
                    <dd class="value">$ 35<span class="clipped">19.66%</span></dd>
                </div>
                <div id="ebay-chart-c8-chart-legend-label-3" 
                    class="chart-legend__item chart-legend__item--quaternary">
                    <dt>Value 1</dt>
                    <dd class="value">$ 29<span class="clipped">16.29%</span></dd>
                </div>
                <div id="ebay-chart-c8-chart-legend-label-4" 
                    class="chart-legend__item chart-legend__item--quinary">
                    <dt>Value 2</dt>
                    <dd class="value">$ 22<span class="clipped">12.36%</span></dd>
                </div>
            </dl>
        </div>
    </div>
</div>
`;
