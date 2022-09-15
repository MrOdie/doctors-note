import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import mikroOrmConfig from "./mikro-orm.config";

const main =async () => {
  const orm = await MikroORM.init(mikroOrmConfig);
  
  const post = orm.em.create(Post, {title: "testing"});

  await orm.em.persistAndFlush(post);

  console.log("Dirname: ", __dirname);
}



main();


console.log("party on")


