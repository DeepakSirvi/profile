
export class Tag {
    static readonly ANGULAR = new Tag('Angular', '#5a7581');
    static readonly JAVA = new Tag('Java', '#5a7581');
    static readonly SPRINGBOOT = new Tag('Spring Boot', '#5a7581');
    static readonly SPRINGSECURITY = new Tag('Spring Security', '#5a7581');
    static readonly SPRINGJWT = new Tag('Spring JWT', '#5a7581');
    static readonly SPRINGWEB = new Tag('Spring Web', '#5a7581');
    static readonly LOMBOK = new Tag('Lombok', '#192129');
    static readonly JPA = new Tag('JPA', '#192129');
    static readonly JDBC = new Tag('JDBC', '#192129');
    static readonly SQL = new Tag('MY-SQL', '#355158');
    static readonly POSTMAN = new Tag('Postman', '#192129');
    static readonly TYPESCRIPT = new Tag('Typescript', '#192129');
    static readonly JAVASCRIPT = new Tag('Javascript', '#192129');
    static readonly HTML5 = new Tag('HTML5', '#192129');
    static readonly CSS3 = new Tag('CSS3', '#192129');
    static readonly BOOTSTRAP = new Tag('Bootstrap', '#192129');
    static readonly WEBSOCKET = new Tag('Web-socket', '#192129');
    static readonly GIT = new Tag('Git', '#192129');
    private constructor(private readonly key: string, public readonly color: string) {
    }

    toString() {
        return this.key;
    }

}