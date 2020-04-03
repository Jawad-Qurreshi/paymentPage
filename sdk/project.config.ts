export class ProjectConfig {
    private static path = 'http://localhost:4400/';
    public static getPath(): string {
      return ProjectConfig.path;
    }
  }