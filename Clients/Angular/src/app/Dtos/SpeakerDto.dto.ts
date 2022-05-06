export class SpeakertDto {
  constructor(
    public id: number,
    public email: string,
    public userName: string,
    public password: string,
    public address: string
  ) {}
}
