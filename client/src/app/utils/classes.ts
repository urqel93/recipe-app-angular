export namespace Classes {

  export class User {
    name: string;
    email: string;
    password: string;
    avatar: string;

    static create(data: any): User {
      const model: User = new User;
      model.name = data['name'] ? data['name'] : null;
      model.email = data['email'] ? data['email'] : null;
      model.password = data['password'] ? data['password'] : null;
      model.avatar = data['avatar'] ? data['avatar'] : null;
      return model;
    }
  }

  export class Recipe {
    id: string;
    user: User;
    name: string;
    userName: string;
    shortText: string;
    description: string;
    ingredients: string;
    date: Date;
    comments: Comment[];

    public static create(data: any) {
      let comments = data['comments'] ?
        data['comments'].forEach(data => {
          Comment.create(data)
        }) : null;
      let model: Recipe = new Recipe;
      model.id = data['_id'] ? data['_id'] : null;
      model.user = data['user'] ? User.create(data['user']) : null;
      model.name = data['name'] ? data['name'] : null;
      model.shortText = data['shortText'] ? data['shortText'] : null;
      model.description = data['description'] ? data['description'] : null;
      model.ingredients = data['ingredients'] ? data['ingredients'] : null;
      model.date = data['date'] ? data['date'] : Date.now();
      model.comments = comments;
      return model;
    }
  }

  export class Comment {
    user: User;
    userName: string;
    text: string;
    avatar: string;
    date: Date;

    public static create(data: any) {
      let model: Comment = new Comment;
      model.user = data['user'] ? data['user'] : null;
      model.userName = data['userName'] ? data['userName'] : null;
      model.text = data['text'] ? data['text'] : null;
      model.avatar = data['avatar'] ? data['avatar'] : null;
      model.date = data['date'] ? data['date'] : Date.now();
    }
  }


}

