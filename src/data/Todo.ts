import * as Immutable from "immutable";

// Record를 생성하는 것이 아닌, Record를 생성하는 팩토리를 반환
export const Todo = Immutable.Record({
  id: "",
  complete: false,
  text: "",
});
