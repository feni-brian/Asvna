import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
	if (request.method === "POST") {
		const { first_name, last_name, email, phone_number, country, company_size, info } = await request.json();
		try {
			const transporter = nodemailer.createTransport({ host: "smtp.gmail.com", port: 465, secure: true, auth: { user: process.env.EMAIL, pass: process.env.PASSWORD } });
			const mailOptions = {
				from: email,
				to: "giftjedi@gmail.com",
				subject: "Contact Form Submission",
				html: `
            <h2>Contact Form Submission</h2>
            <p>First Name: ${first_name}</p>
            <p><strong>Last Name:</strong> ${last_name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone_number}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Company Size:</strong> ${company_size}</p>
            <p><strong>Info:</strong> ${info}</p>
            `,
			};
			await transporter.sendMail(mailOptions);
			return NextResponse.json({ message: "Message sent successfully!" });
		} catch (error) {
			console.log(error);
			return NextResponse.json({ message: "Error sending message!" });
		}
	} else {
		return NextResponse.json({ message: "Invalid request method!" });
	}
}
