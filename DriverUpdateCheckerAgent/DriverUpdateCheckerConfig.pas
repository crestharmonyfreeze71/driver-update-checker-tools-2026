{ DriverUpdateChecker configuration unit }
unit DriverUpdateCheckerConfig;

interface

const
  APP_NAME = 'DriverUpdateChecker';
  APP_CHANNEL = 'github-pages';
  APP_KEYWORD = 'driver update checker';

type
  TAppPaths = record
    DataDir: string;
    LogFile: string;
  end;

function DefaultPaths: TAppPaths;

implementation

function DefaultPaths: TAppPaths;
begin
  Result.DataDir := 'data';
  Result.LogFile := 'data/agent.log';
end;

end.
