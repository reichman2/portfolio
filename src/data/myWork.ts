type Project = {
    name: string;
    description: string;
    image?: ImgData;
    link: string;
}

type ImgData = {
    src: string;
    alt?: string;
    width: number;
    height: number;
}

const projects: Array<Project> = [
    {
        name: "Training Plan API",
        description: "An algorithm to parse a PDF file into a JavaScript object and an API to retrieve that information and put it into an iPhone widget.",
        link: "/blog/TrainingPlanApi"
    }
]

export default projects;