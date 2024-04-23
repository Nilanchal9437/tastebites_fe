import { NextResponse } from "next/server";
import connect from "@/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const client = await connect();

    if (client) {
      const body = await req.json();

      const res = await client
        .collection(`${process.env.USER}`)
        ?.findOne({ email: body.email });

      if (res?._id) {
        const compare = await bcrypt.compare(body.password, res.password);

        if (compare) {
          return NextResponse.json({
            status: 200,
            message: "login successfully",
            data: {
              user_id: res._id,
              email: res.email,
              phone: res.phone
            },
            token: jwt.sign(
              {
                user_id: res._id,
                email: res.email,
                phone: res.phone
              },
              `${process.env.JWT_SECRET}`,
              {
                expiresIn: 86400000
              }
            )
          });
        } else {
          return NextResponse.json({
            status: 401,
            message: "Password doesn't match please try again",
            data: null,
            token: null
          });
        }
      } else {
        return NextResponse.json({
          status: 404,
          message: "Email is not found please register",
          data: null,
          token: null
        });
      }
    } else {
      return NextResponse.json({
        status: 400,
        message: "something went wrong",
        data: null,
        token: null
      });
    }
  } catch (err: any) {
    console.error("Error in login API :::", err?.message);
    return NextResponse.json({
      status: 500,
      message: err?.message,
      data: null,
      token: null
    });
  }
}
