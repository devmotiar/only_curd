import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  posts: Post[] = [];
  constructor(private postService: PostService) { }
  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Post[]) => {
      this.posts = data;
      console.log(this.posts);

    })
  }
// for delete
  
  onDeletePost(id: number): void {
    this.postService.deletePost(id).subscribe({
      next: () => {
        console.log(`Post with ID ${id} deleted successfully.`);
       alert('Delete Successfull!')
      },
      error: (err) => {
        console.error('Error deleting post:', err.message);
      },
    });
  }


// for delete

}
