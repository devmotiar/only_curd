import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  post!: Post;
  form!: FormGroup;

  constructor(public postService: PostService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      body: new FormControl('', [Validators.required, Validators.minLength(5)])
    });

    this.postService.find(this.id).subscribe(
      (data: Post) => {
        this.post = data;
        this.form.patchValue({
          title: this.post.title,
          body: this.post.body
        });
      },
      (error) => {
        console.error('Failed to fetch post data', error);
      }
    );
  }

  get formValidation() {
    return this.form.controls;
  }

  submit() {
    this.postService.update(this.id, this.form.value).subscribe(
      (res: any) => {
        alert('Update successful');
        this.router.navigateByUrl('post/index');
      },
      (error) => {
        console.error('Update failed', error);
      }
    );
  }
}
