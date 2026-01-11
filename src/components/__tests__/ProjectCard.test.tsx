import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectCard } from '../ProjectCard'
import type { Project } from '@/data/projects'

const mockProject: Project = {
  id: '1',
  name: 'Test Project',
  description: 'This is a test project description',
  tags: ['Node.js', 'TypeScript'],
  repoUrl: 'https://github.com/test/project',
  demoUrl: 'https://demo.test.com',
}

describe('ProjectCard', () => {
  it('renders project name and description', () => {
    render(<ProjectCard project={mockProject} />)
    
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('This is a test project description')).toBeInTheDocument()
  })

  it('renders project tags', () => {
    render(<ProjectCard project={mockProject} />)
    
    expect(screen.getByText('Node.js')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('renders repository link when repoUrl is provided', () => {
    render(<ProjectCard project={mockProject} />)
    
    const repoLink = screen.getByLabelText(/Repositório do projeto/i)
    expect(repoLink).toBeInTheDocument()
    expect(repoLink).toHaveAttribute('href', mockProject.repoUrl)
  })

  it('renders demo link when demoUrl is provided', () => {
    render(<ProjectCard project={mockProject} />)
    
    const demoLink = screen.getByLabelText(/Demo do projeto/i)
    expect(demoLink).toBeInTheDocument()
    expect(demoLink).toHaveAttribute('href', mockProject.demoUrl)
  })

  it('does not render demo link when demoUrl is not provided', () => {
    const projectWithoutDemo = { ...mockProject, demoUrl: undefined }
    render(<ProjectCard project={projectWithoutDemo} />)
    
    expect(screen.queryByLabelText(/Demo do projeto/i)).not.toBeInTheDocument()
  })
})
