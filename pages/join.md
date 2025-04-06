<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>新入生向け | 近畿大学電子計算機研究会</title>
    <meta name="description" content="近畿大学電子計算機研究会の新入生向け案内ページです。">
    <style>
        /* 基本スタイル */
        body {
            font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }
        
        /* コンテナ */
        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* ヘッダー */
        header {
            background-color: #1a237e;
            color: white;
            padding: 20px 0;
            text-align: center;
        }
        
        header h1 {
            margin: 0;
            font-size: 28px;
        }
        
        /* ページタイトル */
        .page-title {
            text-align: center;
            font-size: 32px;
            font-weight: bold;
            margin: 30px 0;
            color: #1a237e;
        }
        
        /* セクション */
        .about-section {
            margin: 50px 0;
            background-color: white;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .section-title {
            margin-bottom: 25px;
        }
        
        .section-title-heading {
            color: #1a237e;
            font-size: 24px;
            margin: 0 0 10px 0;
        }
        
        .section-title hr {
            border: 0;
            height: 2px;
            background-color: #1a237e;
            width: 80px;
            margin-left: 0;
        }
        
        .about-section-content {
            line-height: 1.8;
        }
        
        .about-section-content.center {
            text-align: center;
        }
        
        /* スケジュール */
        .schedule-item {
            margin-bottom: 30px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            text-align: left;
            border-left: 3px solid #1a237e;
            padding-left: 20px;
        }
        
        .schedule-date {
            font-weight: bold;
            color: #1a237e;
            margin-bottom: 5px;
        }
        
        .schedule-time {
            font-weight: normal;
            font-size: 0.9em;
        }
        
        .schedule-name {
            font-size: 1.2em;
            font-weight: bold;
            margin-bottom: 10px;
            position: relative;
            display: inline-block;
        }
        
        .underline-box {
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 3px;
            background: #1a237e;
        }
        
        .schedule-description {
            margin-top: 10px;
            color: #666;
        }
        
        /* リンク */
        .line-link {
            display: inline-block;
            color: #1a237e;
            text-decoration: none;
            border-bottom: 2px solid #1a237e;
            padding-bottom: 2px;
            font-weight: bold;
            transition: all 0.3s;
            margin: 15px 0;
        }
        
        .line-link:hover {
            background-color: #e8eaf6;
        }
        
        /* 強調テキスト */
        .subtitle-content {
            font-size: 1.2em;
            font-weight: bold;
            color: #1a237e;
        }
        
        .emph {
            font-weight: bold;
            color: #1a237e;
        }
        
        /* Twitter */
        .wrap-title {
            font-size: 1.2em;
            font-weight: bold;
            position: relative;
            display: inline-block;
            margin: 30px 0 20px;
        }
        
        .twitter-wrap {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
            margin: 20px 0;
        }
        
        .twitter-account {
            width: 280px;
            padding: 15px;
            background-color: #f5f8fa;
            border-radius: 8px;
            border: 1px solid #e1e8ed;
            text-decoration: none;
            color: #333;
            transition: all 0.3s;
        }
        
        .twitter-account:hover {
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transform: translateY(-3px);
        }
        
        .twitter-info-wrap {
            text-align: center;
            margin-bottom: 15px;
        }
        
        .twitter-name {
            font-weight: bold;
            font-size: 1.1em;
            margin-bottom: 10px;
            color: #1a237e;
        }
        
        .twitter-qr {
            width: 100px;
            height: 100px;
            margin: 0 auto 10px;
            background-color: #ddd;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .twitter-qr img {
            max-width: 100%;
            max-height: 100%;
        }
        
        .twitter-accountName {
            color: #1da1f2;
            margin-bottom: 10px;
        }
        
        .twitter-description {
            font-size: 0.9em;
            color: #666;
        }
        
        /* Slack */
        .slack-description {
            max-width: 600px;
            margin: 0 auto;
            background-color: #f5f5f5;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid darkred;
        }
        
        /* 活動内容 */
        .activity-item {
            margin-bottom: 25px;
            padding-left: 20px;
            border-left: 3px solid #1a237e;
        }
        
        .activity-title {
            font-weight: bold;
            font-size: 1.1em;
            color: #1a237e;
            position: relative;
            display: inline-block;
            margin-bottom: 10px;
        }
        
        .activity-description {
            color: #555;
        }
        
        /* フッター */
        footer {
            background-color: #1a237e;
            color: white;
            text-align: center;
            padding: 20px 0;
            margin-top: 50px;
        }
        
        /* レスポンシブデザイン */
        @media (max-width: 768px) {
            .twitter-wrap {
                flex-direction: column;
                align-items: center;
            }
            
            .twitter-account {
                width: 100%;
                max-width: 280px;
            }
            
            .schedule-item {
                padding-left: 15px;
            }
            
            .activity-item {
                padding-left: 15px;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>近畿大学電子計算機研究会</h1>
        </div>
    </header>

    <div class="container">
        <div class="page-title">
            新入生向け
        </div>

        <section class="about-section">
            <div class="about-section-content center">
                <div style="margin-top: 3rem">
                    <span class="subtitle-content">近畿大学の新入生の皆さん、ご入学おめでとうございます！</span>
                </div>
            </div>
        </section>

        <section class="about-section">
            <div class="section-title">
                <h2 class="section-title-heading">電子計算機研究会とは？</h2>
                <hr>
            </div>
            <div class="about-section-content center">
                <p>電子計算機研究会（通称：電算研）は、近畿大学理工学部の公認サークルです。</p>
                <p>プログラミングや電子工作、ゲーム制作、AI開発など、コンピュータに関する幅広い活動を行っています。</p>
                <p>初心者から上級者まで、コンピュータに興味がある方ならどなたでも歓迎します！</p>
                <a href="index.html" class="line-link">詳しくはこちら</a>
            </div>
        </section>

        <section class="about-section">
            <div class="section-title">
                <h2 class="section-title-heading">新歓情報</h2>
                <hr>
            </div>
            <div class="about-section-content center">
                <!-- 4/17 交流会 -->
                <div class="schedule-item">
                    <div class="schedule-date">
                        4/17(木)
                        <span class="schedule-time">(3限 : 13:15 ~ 14:45)</span>
                    </div>
                    <div class="schedule-name">
                        交流会 <span style="font-size: 0.8em;">@ 電算研部室</span>
                        <div class="underline-box"></div>
                    </div>
                    <div class="schedule-description">
                        誰でも参加できる交流会を開催！是非お越しください！
                    </div>
                </div>

                <!-- 4/24 交流会 -->
                <div class="schedule-item">
                    <div class="schedule-date">
                        4/24(木)
                        <span class="schedule-time">(3限 : 13:15 ~ 14:45)</span>
                    </div>
                    <div class="schedule-name">
                        交流会 <span style="font-size: 0.8em;">@ 電算研部室</span>
                        <div class="underline-box"></div>
                    </div>
                    <div class="schedule-description">
                        誰でも参加できる交流会を開催！是非お越しください！
                    </div>
                </div>
            </div>
        </section>

        <section class="about-section">
            <div class="section-title">
                <h2 class="section-title-heading">スケジュールと活動内容</h2>
                <hr>
            </div>
            <div class="about-section-content center">
                <p>以下が電算研のスケジュール(暫定版)になります。</p>
                
                <div class="schedule-table">
                    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                        <caption style="font-weight: bold; font-size: 1.1em; margin-bottom: 10px; color: #1a237e;">電子計算機研究会 11月までのスケジュール表</caption>
                        <thead>
                            <tr>
                                <th style="background-color: #c5e1a5; padding: 8px; border: 1px solid #bbb;">4月</th>
                                <th style="background-color: #c5e1a5; padding: 8px; border: 1px solid #bbb;">5月</th>
                                <th style="background-color: #c5e1a5; padding: 8px; border: 1px solid #bbb;">6月</th>
                                <th style="background-color: #c5e1a5; padding: 8px; border: 1px solid #bbb;">7月</th>
                                <th style="background-color: #c5e1a5; padding: 8px; border: 1px solid #bbb;">8月</th>
                                <th style="background-color: #c5e1a5; padding: 8px; border: 1px solid #bbb;">9月</th>
                                <th style="background-color: #c5e1a5; padding: 8px; border: 1px solid #bbb;">10月</th>
                                <th style="background-color: #c5e1a5; padding: 8px; border: 1px solid #bbb;">11月</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #bbb;">交流会</td>
                                <td style="padding: 8px; border: 1px solid #bbb;">部会開始</td>
                                <td style="padding: 8px; border: 1px solid #bbb;"></td>
                                <td style="padding: 8px; border: 1px solid #bbb;">2週間ほどの部内小規模ハッカソン開催</td>
                                <td style="padding: 8px; border: 1px solid #bbb;">進捗報告会</td>
                                <td style="padding: 8px; border: 1px solid #bbb; text-align: center;" colspan="2">生駒祭に向けて部内で協力開発</td>
                                <td style="padding: 8px; border: 1px solid #bbb;">生駒祭</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #bbb; background: repeating-linear-gradient(45deg, #f9f9f9, #f9f9f9 10px, #f0f0f0 10px, #f0f0f0 20px);"></td>
                                <td style="padding: 8px; border: 1px solid #bbb;" colspan="2">システマティッククラス</td>
                                <td style="padding: 8px; border: 1px solid #bbb; background: repeating-linear-gradient(45deg, #f9f9f9, #f9f9f9 10px, #f0f0f0 10px, #f0f0f0 20px);"></td>
                                <td style="padding: 8px; border: 1px solid #bbb;">外部ハッカソン</td>
                                <td style="padding: 8px; border: 1px solid #bbb; background: repeating-linear-gradient(45deg, #f9f9f9, #f9f9f9 10px, #f0f0f0 10px, #f0f0f0 20px);"></td>
                                <td style="padding: 8px; border: 1px solid #bbb; background: repeating-linear-gradient(45deg, #f9f9f9, #f9f9f9 10px, #f0f0f0 10px, #f0f0f0 20px);"></td>
                                <td style="padding: 8px; border: 1px solid #bbb; background: repeating-linear-gradient(45deg, #f9f9f9, #f9f9f9 10px, #f0f0f0 10px, #f0f0f0 20px);"></td>
                            </tr>
                        </tbody>
                    </table>
                    <p style="margin-top: 15px; color: #555; font-size: 0.95em;">これらのイベントのほかに、連絡事項や親睦を深めるための部会(対面)を月1で開催する予定です。</p>
                </div>
            </div>
        </section>

        <section class="about-section">
            <div class="section-title">
                <h2 class="section-title-heading">入部フォーム</h2>
                <hr>
            </div>
            <div class="about-section-content center">
                <p>ご興味を持っていただけた方は、ぜひ以下のリンクから入部申請をお願い致します！</p>
                <p style="margin-bottom: 15px;"><span class="emph">会費：1000円/年</span></p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSci0FcZMElo-hykb5629smxPK3wZAuiFzJlEfhI3PW4E4UgVw/viewform" class="line-link">入部フォーム</a>
            </div>
        </section>

        <section class="about-section">
            <div class="section-title">
                <h2 class="section-title-heading">ご質問・ご連絡</h2>
                <hr>
            </div>
            <div class="about-section-content center">
                <div>
                    上記の新歓イベントに関する詳しいお知らせや、電算研のその他の情報は、以下のTwitterアカウントや、Slackの広報チャンネルにてお知らせしています。<br>
                    是非フォローやチャンネル参加をお願い致します。<br>
                    広報用Twitterアカウント「電算犬」では、質問箱を利用して電算研に関する質問をすることができます。また、Slackなどでも随時質問は受け付けています。
                </div>
                <div>
                    <div class="wrap-title">
                        Twitter
                        <div class="underline-box"></div>
                    </div>
                    <div class="twitter-wrap">
                        <a href="https://twitter.com/Kindai_csg" class="twitter-account">
                            <div class="twitter-info-wrap">
                                <div class="twitter-name">
                                    電算研公式Twitter
                                </div>
                                <div class="twitter-qr">
                                    <img src="/api/placeholder/100/100" alt="電算研公式Twitter QRコード"/>
                                </div>
                                <div class="twitter-accountName">
                                    @Kindai_csg
                                </div>
                            </div>
                            <div class="twitter-description">
                                電算研のイベントなどについて発信しています。
                            </div>
                        </a>

                        <a href="https://twitter.com/densankendayo" class="twitter-account">
                            <div class="twitter-info-wrap">
                                <div class="twitter-name">
                                    広報 "電算犬"
                                </div>
                                <div class="twitter-qr">
                                    <img src="/api/placeholder/100/100" alt="電算犬Twitter QRコード"/>
                                </div>
                                <div class="twitter-accountName">
                                    @densankendayo
                                </div>
                            </div>
                            <div class="twitter-description">
                                電算研の広報用アカウントです。<br>
                                質問箱やリプライを利用した質問をすることができます。
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="about-section">
            <div class="section-title">
                <h2 class="section-title-heading">理工学部以外の学生の方へ</h2>
                <hr>
            </div>
            <div class="about-section-content center">
                <div>
                    電算研は、理工学部同窓会の下部団体であるため、制度上、理工学部の学生しか入部することができません。<br>
                    ご了承ください。
                </div>
            </div>
        </section>
    </div>

    <footer>
        <div class="container">
            <p>&copy; 2025 近畿大学電子計算機研究会 (CSG)</p>
        </div>
    </footer>
</body>
</html>
