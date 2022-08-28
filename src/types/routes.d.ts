declare namespace NRoutesList {
    type TChildRoute = {
        [key: string]: TChildRoute | string | null;
    };
    interface IMainRoute {
        main: {
            [key: string]: TChildRoute | string;
        };
    }
}
