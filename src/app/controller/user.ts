import { Context, controller, get, inject, provide } from 'midway';
import { IUserService, IUserResult } from '../../interface';
//1、midway中@controller必须再加@provide，spring中@Controller一个就够
@provide()
@controller('/user')
export class UserController {
  //2、midway中注入的变量，必须通过this调用
  @inject()
  ctx: Context;

  //3、midway中@inject类似与spring中的@Autowired
  @inject('userService')
  service: IUserService;

  //4、midway中@get类似与spring中的@RequestMapping(method = RequestMethod.GET)
  @get('/:id')
  //5、midway中每一个异步方法返回都是Promise，必须使用async，spring中都是同步方法
  async getUser(): Promise<void> {
    const id: number = this.ctx.params.id;
    const user: IUserResult = await this.service.getUser({id});
    this.ctx.body = {success: true, message: 'OK', data: user};
  }
}
