import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import connect from "@/db";
import * as yup from "yup";
import { ObjectId } from "mongodb";

export async function PUT(req: Request) {
  try {
    const client = await connect();

    if (client) {
      const entrie = await req.json();

      const schema = yup.object().shape({
        article: yup
          .array()
          .of(
            yup.object().shape({
              generated_id: yup
                .string()
                .trim()
                .required("generated _id is required!"),
              article_id: yup
                .string()
                .trim()
                .required("article _id is required!"),
              content: yup.string().trim().required("content is required!"),
              user_id: yup.string().trim().required("user _id is required!"),
              metadescription: yup
                .string()
                .trim()
                .required("meta description is required!"),
              created_at: yup
                .string()
                .trim()
                .required("created at is required!"),
              title: yup.string().trim().required("title is required!")
            })
          )
          .min(1, "minimum one article is required")
          .required("articles are required!")
      });

      return schema
        .validate({ ...entrie })
        .then(async value => {
          const bulk = client
            ?.db(`${process.env.DB_NAME}`)
            ?.collection(`${process.env.ARTICLE}`)
            .initializeOrderedBulkOp();

          value?.article.map((item: any) => bulk.insert(item));

          const res = await bulk.execute();

          if (res?.insertedIds) {
            return NextResponse.json({
              status: true,
              message: "article generated successfully",
              data: res
            });
          } else {
            return NextResponse.json({
              status: false,
              message: "something is wrong",
              data: res
            });
          }
        })
        .catch(err => {
          console.log("error occour ::", err);
          if (err.errors != null && err.errors.length > 0) {
            return NextResponse.json({
              status: false,
              message: "something error occour",
              data: err.errors[0]
            });
          } else {
            return NextResponse.json({
              status: false,
              message: "something error occour",
              data: err.message
            });
          }
        });
    } else {
      return NextResponse.json({
        status: false,
        message: "something is wrong",
        data: client
      });
    }
  } catch (err: any) {
    console.error("Error in generateing articles :::", err?.message);
    return NextResponse.json({
      status: false,
      message: "something is wrong",
      data: err
    });
  }
}

export async function GET(req: NextRequest) {
  try {
    const client = await connect();

    if (client) {
      const limit: any = req.nextUrl.searchParams.get("limit");
      const pageNo: any = req.nextUrl.searchParams.get("pageNo");
      const user_id: any = req.nextUrl.searchParams.get("user_id");

      const startingAfter: number = (parseInt(pageNo) - 1) * parseInt(limit);

      const res = await client
        ?.db(`${process.env.DB_NAME}`)
        ?.collection(`${process.env.ARTICLE}`)
        ?.aggregate([
          { $match: { user_id: user_id } },
          {
            $facet: {
              result: [
                { $sort: { _id: -1 } },
                { $skip: startingAfter },
                { $limit: parseInt(limit) }
              ],
              total: [{ $count: "total" }]
            }
          }
        ])
        .toArray();

      if (res && Array.isArray(res) && res.length > 0) {
        const response = res[0]?.result;
        const total = res[0]?.total[0]?.total;

        return NextResponse.json({
          status: true,
          message: "article fetched successfully",
          data: response,
          total: total
        });
      } else {
        return NextResponse.json({
          status: false,
          message: "something is wrong",
          data: [],
          total: 0
        });
      }
    } else {
      return NextResponse.json({
        status: false,
        message: "something is wrong",
        data: [],
        total: 0
      });
    }
  } catch (err: any) {
    console.error("Error in getting articles :::", err?.message);
    return NextResponse.json({
      status: false,
      message: "something is wrong",
      data: [],
      total: 0
    });
  }
}

export async function POST(req: Request) {
  try {
    const client = await connect();

    if (client) {
      const entrie = await req.json();

      const schema = yup.object().shape({
        id: yup.string().trim().required("article id is missing!")
      });

      return schema
        .validate({ ...entrie })
        .then(async value => {
          const res = await client
            ?.db(`${process.env.DB_NAME}`)
            ?.collection(`${process.env.ARTICLE}`)
            ?.findOne({ _id: new ObjectId(`${value.id}`) });

          if (res?._id) {
            return NextResponse.json({
              status: true,
              message: "article details fetched successfully",
              data: res
            });
          } else {
            return NextResponse.json({
              status: false,
              message: "something is wrong article details",
              data: res
            });
          }
        })
        .catch(err => {
          if (err.errors != null && err.errors.length > 0) {
            return NextResponse.json({
              status: false,
              message: "something error occour",
              data: err.errors[0]
            });
          } else {
            return NextResponse.json({
              status: false,
              message: "something error occour",
              data: err.message
            });
          }
        });
    } else {
      return NextResponse.json({
        status: false,
        message: "something is wrong article details",
        data: client
      });
    }
  } catch (err: any) {
    console.error("Error in getting articles details :::", err?.message);
    return NextResponse.json({
      status: false,
      message: "something is wrong article details",
      data: err.message
    });
  }
}
