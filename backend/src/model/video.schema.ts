import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './user.schema';

export type VideoDocument = Video & Document;

@Schema()
export class Video {
  @Prop()
  title: string;
  @Prop()
  video: string;
  @Prop()
  coverImage: string;
  @Prop({ default: Date.now() })
  uploadedDate: Date;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  createdBy: User;
}

export const VideoSchema = SchemaFactory.createForClass(Video);