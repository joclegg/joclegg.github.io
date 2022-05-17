import profile from './profile.jfif';
export const CVData = {
    personalData: {
        name: 'Joseph Clegg',
        title: 'Senior Software Developer',
        image: profile,
        contacts: [
            { type: 'email', value: 'jo_clegg@hotmail.com' },
            { type: 'phone', value: '+44 752 676 7568' },
            { type: 'location', value: 'London' },
            { type: 'linkedin', value: 'linkedin.com/in/josephmarkclegg/' }
        ]
    },
    branding: false,
    sections: [
        {
            type: 'text',
            title: 'Career Profile',
            content: 'Software engineer building microservices in Azure Kubernetes interacting with other Azure services. Experience with many database and messaging technologies. Some experience with React and Angular.',
            icon: 'usertie'
        },
        {
            type: 'common-list',
            title: 'Education',
            icon: 'graduation',
            items: [
                {
                    title: 'Natural Sciences (MNatSci)',
                    authority: 'University of Leeds',
                    authorityWebSite: 'https://www.leeds.ac.uk/',
                    rightSide: '2011 - 2015'
                },
                {
                    title: 'A Levels (Maths (A*), Further Maths (A), Physics (A*), Chemistry (A*))',
                    authority: 'Bullers Wood School',
                    authorityWebSite: 'http://www.bwsgirls.org/',
                    rightSide: '2009 - 2011'
                },
                {
                    title: 'GCSEs (9 grades A* to B)',
                    authority: 'Dulwich College',
                    authorityWebSite: 'https://www.dulwich.org.uk/senior-school',
                    rightSide: '2000 - 2009'
                }
            ]
        },
        {
            type: 'experiences-list',
            title: 'Experiences',
            icon: 'archive',
            items: [
                {
                    title: 'Software Developer',
                    company: 'Axi Financial Services (UK)',
                    description: 'Designing, building and taking ownership of a new greenfield internal CRM platform, for onboarding and managing customer lifetime, built as a set of loosely coupled microservices.',
                    companyWebSite: 'https://www.axi.com/',
                    companyMeta: 'London UK',
                    datesBetween: '2021.05 - Present',
                    descriptionTags: ['.Net Core', 'Azure', 'Kubernetes', 'Cosmos DB', 'Azure DevOps', 'Terraform']
                },
                {
                    title: 'Software Engineer',
                    company: 'Genius Sports Group',
                    description: 'Working on core sportsbook platform built as a distributed system with legacy monolith services and greenfield microservices.',
                    companyWebSite: 'https://geniussports.com/',
                    companyMeta: 'London UK',
                    datesBetween: '2019.05 - 2021.04',
                    descriptionTags: ['.Net Core', 'AWS', 'Kubernetes', 'GitLab']
                },
                {
                    title: 'eRate Analyst',
                    company: 'AXA UK',
                    description: 'Translating pricing models and underwriting business rules into proprietary software.',
                    companyWebSite: 'https://www.axa.co.uk/',
                    companyMeta: 'Surrey UK',
                    datesBetween: '2015.08 - 2019.04',
                    descriptionTags: ['SQL', '.Net', 'Agile']
                },
                {
                    title: 'Account Manager',
                    company: 'TalentSpa',
                    description: 'Telesales for CV software.',
                    companyWebSite: 'https://www.talentspa.co.uk/',
                    companyMeta: 'London UK',
                    datesBetween: '2013.06'
                }
            ]
        },
        {
            type: 'common-list',
            title: 'Languages',
            icon: 'language',
            items: [
                {
                    authority: 'English',
                    authorityMeta: 'Native'
                }
            ]
        },
        {
            type: 'tag-list',
            title: 'Skills Proficiency',
            icon: 'rocket',
            items: [
                '.Net Core',
                'Kubernetes',
                'Azure',
                'AWS',
                'Azure Pipelines',
                'Gitlab Pipelines',
                'CICD',
                'Flux CD',
                'Terraform',
                'SQL'
            ]
        },
        {
            type: 'tag-list',
            title: 'Hobbies & Interests',
            icon: 'cubes',
            items: ['Film', 'Video Games', 'Food', 'Comedy']
        }
    ]
}
