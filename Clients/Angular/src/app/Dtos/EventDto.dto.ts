import { SpeakertDto } from "./SpeakerDto.dto";
import { StudentDto } from "./StudentDto.dto";

export class EventDto {
  constructor(
    public title: string,
    public date: Date,
    public mainSpeaker: SpeakertDto,
    public otherSpeakers: SpeakertDto[],
    public students: StudentDto[]
  ) {}
}
