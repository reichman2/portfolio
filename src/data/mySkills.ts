type Skill = {
  name: string;
  technologies: object;
}

const skills: Array<Skill> = [
  {
    name: "JavaScript",
    technologies: {
      "TypeScript": { image: 'typescript-logo.svg' },
      "React": { image: 'react-logo.svg' },
      "NextJS": { image: 'next-logo.svg' },
      "ExpressJS": { image: 'expressjs-logo.svg' },
      "GraphQL": { image: 'graphql-logo.svg' },
      "Sass": { image: 'sass-logo.svg' },
      "Tailwind": { image: 'tailwindcss-logo.svg' },
    }
  },
  {
    name: "Python",
    technologies: {
      "Django": { image: 'django-logo.png' },
      "Flask": { image: 'flask-logo.svg' },
    }
  },
  {
    name: "Cloud",
    technologies: {
      "Vercel": { image: 'vercel-logo.svg' },
      "Heroku": { image: 'heroku-logo.svg' },
      "AWS": { image: 'aws-logo.svg' }
    }
  },
  {
    name: "Design",
    technologies: {
      "Adobe Illustrator": { image: 'illustrator-logo.svg' },
      "Adobe Photoshop": { image: 'photoshop-logo.svg' },
      "Blender": { image: 'blender-logo.svg' }
    }
  },
  {
    name: "Other",
    technologies: {
      "Java": { image: 'java-logo.svg' },
      "C#": { image: 'csharp-logo.svg' },
      "Unity": { image: 'unity-logo.png' },
      "Bukkit": { image: 'bukkit-logo.png' },
    }
  },
];

export default skills;