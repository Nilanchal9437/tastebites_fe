import { NextResponse } from "next/server";
import connect from "@/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const client = await connect();

    if (client) {
      const body = await req.json();

      const res = await client
        .collection(`${process.env.USER}`)
        ?.findOne({ email: body.email });

      if (res?._id) {
        return NextResponse.json({
          status: 200,
          message: "This email already exsist!",
          data: null
        });
      } else {
        const hash = await bcrypt.hash(body.password, 12);

        const response = await client
          .collection(`${process.env.USER}`)
          ?.insertOne({
            password: hash,
            email: body.email,
            phone: body.phone,
            created_at: new Date()
          });

        if (response) {
          return NextResponse.json({
            status: 200,
            message: "Register successfully! ",
            data: response
          });
        } else {
          return NextResponse.json({
            status: 400,
            message: "Something went wrong!",
            data: response
          });
        }
      }
    } else {
      return NextResponse.json({
        status: 400,
        message: "something went wrong",
        data: null,
      });
    }
  } catch (err: any) {
    console.error("Error in register API :::", err?.message);
    return NextResponse.json({
      status: 500,
      message: err?.message,
      data: null
    });
  }
}
