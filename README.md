# bluewater-interiors

[Click here](https://www.figma.com/design/AGINr1Qy85RfFXkm5Am3ot/BlueWater-Interiors-Agency-(Copy)?node-id=0-1&t=6Re6ZBvFnbJ4P7eC-1) for the current design iteration.

## Development Principles
- **Code modularistion:** this means each component does only one thing and what it does can be understood from the name
- **Mobile first:** always start with mobile design. Then add "md:" and "lg:" tailwind breakpoints.
- **semantic html:** this means making full use of the repertoire of html components (check out [this link](https://www.semrush.com/blog/semantic-html5-guide/) and [this link](https://www.w3schools.com/html/html5_semantic_elements.asp))
- **Optimised Image loading:** use [the NextJs Image component](https://nextjs.org/docs/app/api-reference/components/image)
- **Server component focus:** try to use server components as much as possible and client components only if necessary

## Git workflow
1. Create or choose existing issue
2. Change status to "in progress"
3. Create a branch for this issue (make sure to select dev as source)
4. Each commit follows [the conventional commit standard](https://www.conventionalcommits.org/en/v1.0.0/#summary) and changes only one thing that can be understood from the name
6. When finished with the issue, create a pull request and request review
7. Move on to next issue and repeat from step 1
