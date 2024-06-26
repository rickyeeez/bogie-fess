import { HttpStatusCode } from "axios";
import connectMongo from "@/app/lib/connectDB";
import Confess from "@/app/models/confess";
import { CreateConfessDto } from "@/app/dto/create-confess.dto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectMongo();

    const body: CreateConfessDto = await req.json();
    const defaultValues: Partial<CreateConfessDto> = {
      from: "Anonymous",
      to: "-",
    };

    const data: CreateConfessDto = { ...defaultValues, ...body };

    if (data.text) {
      await Confess.create(data);
      return NextResponse.json(
        { message: "Pesan berhasil dibuat!", success: true },
        { status: HttpStatusCode.Created }
      );
    }

    return NextResponse.json(
      { message: "Pesan Tidak Boleh Kosong !", success: false },
      { status: HttpStatusCode.BadRequest }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error || "An error occurred", success: false },
      { status: HttpStatusCode.BadRequest }
    );
  }
}
export async function GET() {
  try {
    await connectMongo();
    const confess = await Confess.find();
    return NextResponse.json({ data: confess });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
