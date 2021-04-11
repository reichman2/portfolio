type Project = {
    name: string;
    description: string;
    image?: string;
    link?: string;
}

const projects: Array<Project> = [
    {
        name: "Spotify DJ",
        description: "",
        image: "",
        link: ""
    },
    {
        name: "Deerfield Kiva Club",
        description: "",
        image: "",
        link: ""
    },
    {
        name: "Training Plan API",
        description: "An algorithm to parse a PDF file into a JavaScript object and an API to retrieve that information and put it into an iPhone widget.",
        image: "",
        link: ""
    }
]

export default projects;