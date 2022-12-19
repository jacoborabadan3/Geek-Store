import NavBar from "../NavBar/NavBar";
import "./Loading.scss";

const Loading = () => {

    return (
        <main>
            <NavBar />
            <div className="loadingWidth">
                <div className={'loadingPage'}>
                    <div className="cube">
                        <div className="face face-up">
                            <div className="grids">
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                            </div>
                        </div>
                        <div className="face face-down">
                            <div className="grids">
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                            </div>
                        </div>
                        <div className="face face-right">
                            <div className="grids">
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                            </div>
                        </div>
                        <div className="face face-left">
                            <div className="grids">
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                            </div>
                        </div>
                        <div className="face face-front">
                            <div className="grids">
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                            </div>
                        </div>
                        <div className="face face-back">
                            <div className="grids">
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                            </div>
                        </div>
                    </div>
                    <h1>Cargando .....</h1>
                </div>
            </div>
        </main>
    );
};

export default Loading;