export class CreateSpeakerDto {
  constructor(
    public email: string,
    public password: string,
    public userName: string,
    public address: string
  ) {}
}
