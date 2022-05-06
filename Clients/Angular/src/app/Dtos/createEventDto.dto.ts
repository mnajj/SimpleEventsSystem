export class CreateEventDto {
  constructor(
    public title: string,
    public date: Date,
    public mainSpeakerId: number,
    public otherSpeakers: number[],
    public students: number[]
  ) {}
}
