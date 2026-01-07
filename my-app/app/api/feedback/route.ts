import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { name, email, message } = data;

        // Simulate sending email (would use nodemailer here normally)
        console.log("========================================");
        console.log("NEW FEEDBACK RECEIVED");
        console.log(`From: ${name} <${email}>`);
        console.log(`To: nex.gen.3023@gmail.com`);
        console.log(`Message: ${message}`);
        console.log("========================================");

        // Placeholder for actual email sending logic:
        // const transporter = nodemailer.createTransport({ ... });
        // await transporter.sendMail({
        //   from: process.env.EMAIL_USER,
        //   to: "nex.gen.3023@gmail.com",
        //   replyTo: email,
        //   subject: `New Feedback from ${name}`,
        //   text: message
        // });

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({ success: true, message: "Feedback sent successfully" });
    } catch (error) {
        console.error("Error sending feedback:", error);
        return NextResponse.json(
            { success: false, message: "Failed to send feedback" },
            { status: 500 }
        );
    }
}
