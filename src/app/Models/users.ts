export class Users {
      id: number;
      name: string;
      username: string;
  json: any;

      constructor(response: any)
      {
          this.id = response.id;
          this.name = response.name;
          this.username = response.username;
      }
}
