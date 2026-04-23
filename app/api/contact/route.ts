import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, kana, phone, email, jobType, age, experience, motivation } =
    await req.json();

  if (!name || !phone || !email || !jobType) {
    return NextResponse.json({ error: 'Required fields missing' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const body = `
【株式会社TECNES 採用応募フォーム】

■ 氏名：${name}
■ フリガナ：${kana || '未入力'}
■ 年齢：${age || '未入力'}
■ 電話番号：${phone}
■ メールアドレス：${email}
■ 希望職種：${jobType}
■ 経験・資格：${experience || '未入力'}
■ 志望動機：${motivation || '未入力'}
`.trim();

  try {
    await transporter.sendMail({
      from: `"TECNES採用フォーム" <${process.env.GMAIL_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `【採用応募】${name}様より（${jobType}）`,
      text: body,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Mail send error:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
